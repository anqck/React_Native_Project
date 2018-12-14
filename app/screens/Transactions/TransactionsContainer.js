import R from 'ramda';
import { Animated, Platform } from 'react-native';
import { connect } from 'react-redux';
import { compose, hoistStatics, pure, withHandlers, withProps, withState } from 'recompose';

import screens from '../../constants/screens';
import { getTotalBalance } from '../../modules/accounts/selectors';
import { transactionsOperations } from '../../modules/transactions';
import { getTransactions } from '../../modules/transactions/selectors';
import { transfersOperations } from '../../modules/transfers';
import { getTransfers } from '../../modules/transfers/selectors';
import { dimensions } from '../../styles';
import { startOfDay } from '../../utils/dateHelpers';
import TransactionsScreenView from './TransactionsScreenView';


const mapStateToProps = (state, props) => ({
  transactions: getTransactions(state, props),
  transfers: getTransfers(state, props),
  totalBalance: getTotalBalance(state),
});

const enhance = compose(
  withState('dateForFiltering', 'setDateForFiltering', startOfDay),
  connect(
    mapStateToProps,
    {
      ...transactionsOperations,
      ...transfersOperations,
    }
  ),

  withState('listRef', 'setListRef', null),
  withState('isScrollEnabled', 'setScrollEnabled', true),
  withState('scrollY', 'setScrollY',
    new Animated.Value(Platform.OS === 'ios' ? -dimensions.headerMaxHeight : 0)),

  withHandlers({
    onAddToFavourite: props => ({ isTransaction, id }) => {
      isTransaction
      ? props.addTransactionToFavourites(id)
      : props.addTransferToFavourites(id);
    },
    onDeleteFromFavourites: props => ({ isTransaction, id }) => {
      isTransaction
        ? props.onDeleteFromFavourites(id)
        : props.onDeleteTransferFromFavourites(id);
    },
    onDelete: props => ({ isTransaction, id }) => {
      isTransaction
        ? props.deleteTransaction(id)
        : props.deleteTransfer(id);
    },
    onGoToDetail: ({ navigation }) => ({ isTransaction, id }) => {
      withProps(props => ({
        concatenatedData: R.sortWith(
          [R.descend(R.prop('date'))], R.concat(props.transactions, props.transfers)),
       
      }));
      navigation.navigate(isTransaction
        ? screens.TransactionDetail
        : screens.TransferDetail,
        { id });
    },
    onAllowScroll: props => isScrollEnabled => props.setScrollEnabled(isScrollEnabled),
  }),

  withProps(props => ({
    concatenatedData: R.sortWith(
      [R.descend(R.prop('date'))], R.concat(props.transactions, props.transfers)),
   
  })),
 
 
  pure,
);

export default hoistStatics(enhance)(TransactionsScreenView);
