import screens from '../../constants/screens';
import Accounts from '../../screens/Accounts';
import AccountEditor from '../../screens/AccountEditor'

import headerOptions from '../../utils/stackHeaderOptions';

const Routes = {
  [screens.Accounts]: {
    screen: Accounts,
    navigationOptions: headerOptions(),
  },
  [screens.AccountEditor]: {
    screen: AccountEditor,
  },
};

export default Routes;
