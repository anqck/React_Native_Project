import R from 'ramda';
import { connect } from 'react-redux';
import { compose, hoistStatics, lifecycle, withHandlers, withProps, withState } from 'recompose';

import screens from '../../constants/screens';
import { transactionsOperations } from '../../modules/transactions';
import { getFavouritesTransactions } from '../../modules/transactions/selectors';
import { transfersOperations } from '../../modules/transfers';
import { getFavouritesTransfers } from '../../modules/transfers/selectors';
import { startOfDay } from '../../utils/dateHelpers';
import FavouritesScreenView from './FavouritesScreenView';


const mapStateToProps = (state, props) => ({
  transfers: getFavouritesTransfers(state, props),
  transactions: getFavouritesTransactions(state, props),
});

const enhance = compose(
  withState('dateForFiltering', 'setDateForFiltering', startOfDay),
  connect(mapStateToProps, { ...transactionsOperations, ...transfersOperations }),
  withState('listRef', 'setListRef', null),

  withProps(props => ({
    concatenatedData: R.sortWith(
      [R.descend(R.prop('date'))], R.concat(props.transactions, props.transfers)),
  })),

  withHandlers({
    onDeleteFromFavourites: props => ({ isTransaction, id }) => {
      isTransaction
        ? props.onDeleteFromFavourites(id)
        : props.onDeleteTransferFromFavourites(id);
    },
    onGoToDetail: ({ navigation }) => ({ isTransaction, id }) => {
      navigation.navigate(isTransaction
        ? screens.TransactionDetail
        : screens.TransferDetail,
        { id });
    },
  }),
  lifecycle({
    componentDidUpdate(prevProps) {
      if (this.props.data !== prevProps.data) {
        setTimeout(() => this.props.listRef.scrollToOffset(0), 0);
      }
    },
  }),
);

export default hoistStatics(enhance)(FavouritesScreenView);
