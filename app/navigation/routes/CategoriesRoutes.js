import screens from '../../constants/screens';
import Categories from '../../screens/Categories';
import CategoryEditor from '../../screens/CategoryEditor';
import Favourites from '../../screens/Favourites';
import MoreMenu from '../../screens/MoreMenu';

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
