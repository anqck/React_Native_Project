import { createStackNavigator,StackNavigator } from 'react-navigation';
import TransactionsRountes from '../routes/TransactionsRountes';
import navOptions from '../../utils/navOptions';

const TransactionsNavigator = createStackNavigator(TransactionsRountes, {
  ...navOptions({
    title: 'Transactions',

  }),
});

export default TransactionsNavigator;
