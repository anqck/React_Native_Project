import screens from '../../constants/screens';
 import TransactionEditor from '../../screens/TransactionEditor.OverView';
 import TransactionDetail from '../../screens/TransactionDetail';
 import Calculator from '../../screens/Calculator';
import Transactions from '../../screens/Transactions'
import TransferDetail from '../../screens/TransferDetail'
import headerOptions from '../../utils/stackHeaderOptions';

const TransactionsRoutes = {
  [screens.Transactions]: {
    screen: Transactions,
    navigationOptions: headerOptions(),
  },
  [screens.TransactionEditor]: {
    screen: TransactionEditor,
  },
  [screens.Calculator]: {
    screen: Calculator,
  },
  [screens.TransactionDetail]: {
    screen: TransactionDetail,
  },
  [screens.TransferDetail]: {
    screen: TransferDetail,
  },
};

export default TransactionsRoutes;
