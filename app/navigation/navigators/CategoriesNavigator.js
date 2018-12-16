import { createStackNavigator,StackNavigator } from 'react-navigation';
import CategoriesRoutes from '../routes/CategoriesRoutes';
import navOptions from '../../utils/navOptions';

const CategoriesNavigator = createStackNavigator(CategoriesRoutes, {
  ...navOptions({
    title: 'Categories',

  }),
});

export default CategoriesNavigator;
