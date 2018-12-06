import screens from '../../constants/screens';
import Categories from '../../screens/Categories';
import CategoryEditor from '../../screens/CategoryEditor'
import MoreMenu from '../../screens/MoreMenu';
import Favourites from '../../screens/Favourites';

import headerOptions from '../../utils/stackHeaderOptions';

const CategoriesRoutes = {
  [screens.MoreMenu]: {
    screen: MoreMenu,
    // navigationOptions: headerOptions(),
  },
  [screens.Categories]: {
    screen: Categories,
    // navigationOptions: headerOptions(),
  },
  [screens.CategoryEditor]: {
    screen: CategoryEditor,
  },
  [screens.Favourites]: {
    screen: Favourites,
  },
};

export default CategoriesRoutes;
