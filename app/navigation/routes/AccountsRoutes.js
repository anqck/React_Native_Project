import screens from '../../constants/screens';
import Accounts from '../../screens/Accounts';
import AccountEditor from '../../screens/AccountEditor'
import AccountDetails from '../../screens/AccountDetails'
import TransferEditor from '../../screens/TransferEditor'
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
