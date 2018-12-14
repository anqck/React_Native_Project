import { createStackNavigator } from 'react-navigation';

import navOptions from '../../utils/navOptions';
import AccountsRoutes from '../routes/AccountsRoutes';

const AccountsNavigator = createStackNavigator(AccountsRoutes, {
  ...navOptions({
    title: 'Accounts',

  }),
});

export default AccountsNavigator;
