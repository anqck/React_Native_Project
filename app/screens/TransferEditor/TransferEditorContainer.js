import {
  withProps,
  compose,
  hoistStatics,
  withHandlers,
  withState,
  withPropsOnChange,
} from 'recompose';
import { getParam } from '../../utils/navHelpers';
import R from 'ramda';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import TransactionEditorScreenView from './TransferEditorScreenView';
import { getAccounts, getTotalBalance } from '../../modules/accounts/selectors';
import { transfersOperations } from '../../modules/transfers';
import { withSetter, checkReadyForSubmit } from '../../utils/enhancersForm';

const accountProp = (propName, def) => R.pathOr(def, ['account', propName]);

const withAccount = withProps(({ navigation }) => ({
  account: getParam('account')(navigation),
}));

const fields = ['from', 'value', 'to', 'date', 'note'];
const msg = 'Không đủ tiền để chuyển';

const checkValidValue = (value, { from: { balance } }) => ({
  isValid: !!value && Number(value) < Number(balance),
  message: `${msg}, số tiền hiện tại - ${balance}`,
});

const onChangeBalance = (value) => +value.replace(/[^\d]/g, '');

const mapStateToProps = state => ({
  accountsArr: getAccounts(state),
  accounts: R.pathOr({}, ['accounts', 'byId'], state),
  totalBalance: getTotalBalance(state),
});

const enhance = compose(
  connect(mapStateToProps, transfersOperations),
  withAccount,
  withSetter('from', {}, R.length),
  withSetter('value', '', checkValidValue, onChangeBalance),
  withSetter('to', {}, R.length),
  withState('date', 'setDate', new Date()),
  // withSetter('date', new Date()),
  withSetter('note', ''),

  withPropsOnChange(['from'], props => {
    if (!R.isEmpty(props.from)) props.onToggleValidValue(props.value);
  }),

  checkReadyForSubmit(fields),

  withHandlers({
    onSubmit: ({ createTransfer, navigation, ...props }) => () => {
      console.log(props);
      createTransfer({
        ...R.pick(fields, props),
        from: R.prop('id', props.from),
        to: R.prop('id', props.to),
      });

      navigation.dispatch(NavigationActions.back());
    },
  }),
);

export default hoistStatics(enhance)(TransactionEditorScreenView);
