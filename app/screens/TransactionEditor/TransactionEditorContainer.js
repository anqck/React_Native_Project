import R from 'ramda';
import { DeviceEventEmitter } from 'react-native';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';
import { compose, hoistStatics, lifecycle, withHandlers, withProps, withPropsOnChange, withState } from 'recompose';

import { getAccounts } from '../../modules/accounts/selectors';
import { getExpenseCategory, getIncomeCategory } from '../../modules/categories/selectors';
import { transactionsOperations } from '../../modules/transactions';
import { colors } from '../../styles';
import { getParam } from '../../utils/navHelpers';
import TransactionEditorScreenView from './TransactionEditorScreenView';

const requiredProps = ['value', 'account', 'category', 'date'];

const isFieldsFilled = R.pipe(R.props, R.none(R.isNil));

const mapStateToProps = (state, { navigation }) => ({
  accounts: getAccounts(state),
  accountsById: state.accounts.byId,
  categoriesById: state.categories.byId,
  expenseCategories: getExpenseCategory(state.categories),
  incomeCategories: getIncomeCategory(state.categories),
  transaction: R.pathOr(null, ['transactions', 'byId', getParam('id')(navigation)], state),
});

//ScreenB...



const enhance = compose(

  connect(mapStateToProps, transactionsOperations),

  withState('date', 'setDate', new Date()),
  withState('value', 'setValue', 0),
  withState('isIncome', 'setIsIncome', true),
  withState('isVisibleModal', 'setVisibleModal', false),

  withState('account', 'setAccount', null),
  withState('category', 'setCategory', null),
  withState('isSelectedCategory', 'setSelectedCategory', false),
  withState('note', 'setNote', ''),

  withPropsOnChange(
    requiredProps,
    props => ({ isReadyForSubmit: isFieldsFilled(requiredProps, props) }),
  ),


  withProps(({
    transaction, createTransaction, updateTransaction, category, account,
  }) => ({
    submit: transaction ? updateTransaction : createTransaction,
    categoryName: R.pathOr('Danh mục', ['name'], category),
    categoryIcon: {
      name: R.pathOr('', ['icon'], category),
      color: R.pathOr(colors.greyDarker, ['color'], account),
    },
  })),
  withHandlers({
    onUpdateNote: ({ setNote }) => (text) => { setNote(text); },
    onChangeAccount: ({ setAccount }) => (id, account) => { setAccount(account); },
    onSubmit: ({
      submit, transaction, account, category, navigation, ...props
    }) => () => {

      
      let editedProps = {
        ...R.pick(['value', 'date', 'note'], props),
        account: account && account.id,
        category: category && category.id,
      };

      if (transaction) editedProps = { id: transaction.id, ...editedProps };

      submit(editedProps);
      // navigation.dispatch(NavigationActions.back());

      //navigation.navigate('IncomeCalculator', { type: 'expense' });
  
      
      DeviceEventEmitter.emit('Refresh',  {})
      Toast.show('Lưu thành công.');
       navigation.goBack();

    },
    onToggleModal: ({ setVisibleModal, isVisibleModal }) => () => {
      setVisibleModal(!isVisibleModal);
    },
  }),

  withHandlers({
    onChangeCategory: ({ setCategory, onToggleModal, setSelectedCategory }) => (category) => {
      onToggleModal();
      setCategory(category);
      setSelectedCategory(true);
    },
  }),

  lifecycle({
    componentDidMount() {
      const {
        navigation,
        setValue,
        setDate,
        setAccount,
        setCategory,
        setNote,
        transaction,
        accountsById,
        categoriesById,
        setSelectedCategory,
        setIsIncome,
      } = this.props;

      setValue(Number(getParam('value')(navigation)));
      setIsIncome(getParam('isIncome')(navigation));

      if (transaction) {
        const { date, account, category, note } = transaction;
        setDate(new Date(date));
        setAccount(accountsById[account]);
        setCategory(categoriesById[category]);
        setSelectedCategory(true);
        setNote(note || '');
      }
    },
  }),
);

export default hoistStatics(enhance)(TransactionEditorScreenView);
