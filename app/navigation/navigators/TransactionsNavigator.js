import { createStackNavigator } from 'react-navigation';

import navOptions from '../../utils/navOptions';
import TransactionsRountes from '../routes/TransactionsRountes';

const TransactionsNavigator = createStackNavigator(TransactionsRountes, {
  ...navOptions({
    title: 'Transactions',

  }),
});

export default TransactionsNavigator;
