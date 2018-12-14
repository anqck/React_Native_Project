import screens from '../../constants/screens';
import Accounts from '../../screens/Accounts';

import headerOptions from '../../utils/stackHeaderOptions';

const Routes = {
  [screens.Accounts]: {
    screen: Accounts,
    navigationOptions: headerOptions(),
  },

};

export default Routes;
