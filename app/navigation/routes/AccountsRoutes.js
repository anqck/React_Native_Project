import screens from '../../constants/screens';
import AccountDetails from '../../screens/AccountDetails';
import AccountEditor from '../../screens/AccountEditor';
import Accounts from '../../screens/Accounts';
import TransferEditor from '../../screens/TransferEditor';
import headerOptions from '../../utils/stackHeaderOptions';

const AccountsRoutes = {
  [screens.Accounts]: {
    screen: Accounts,
    navigationOptions: headerOptions(),
  },
  [screens.AccountEditor]: {
    screen: AccountEditor,
  },
  [screens.AccountDetail]: {
    screen: AccountDetails,
  },
  [screens.TransferEditor]: {
    screen: TransferEditor,
  },
 
};

export default AccountsRoutes;
