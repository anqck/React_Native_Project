import screens from '../../constants/screens';
import Categories from '../../screens/Categories';
import CategoryEditor from '../../screens/CategoryEditor'

import headerOptions from '../../utils/stackHeaderOptions';

const CategoriesRoutes = {
  [screens.Categories]: {
    screen: Categories,
    // navigationOptions: headerOptions(),
  },
//   [screens.CategoryEditor]: {
//     screen: CategoryEditor,
//   },
};

export default CategoriesRoutes;
