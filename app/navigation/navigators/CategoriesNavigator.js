import { createStackNavigator } from 'react-navigation';

import navOptions from '../../utils/navOptions';
import CategoriesRoutes from '../routes/CategoriesRoutes';

const CategoriesNavigator = createStackNavigator(CategoriesRoutes, {
  ...navOptions({
    title: 'Categories',

  }),
});

export default CategoriesNavigator;
