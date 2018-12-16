import screens from '../../constants/screens';
// import TransactionsEditor from '../../screens/TransactionsEditor';
import Transactions from '../../screens/Transactions'

import headerOptions from '../../utils/stackHeaderOptions';

const TransactionsRoutes = {
  [screens.Transactions]: {
    screen: Transactions,
    navigationOptions: headerOptions(),
  },
  // [screens.TransactionEditor]: {
  //   screen: TransactionsEditor,
  // },
};

export default TransactionsRoutes;
