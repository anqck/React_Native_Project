import { TabNavigator,createBottomTabNavigator,createMaterialTopTabNavigator  } from 'react-navigation';

import CalculatorRoutes from './routes/CalculatorRoutes';

const config = {
//   animationEnabled: false,
//   tabBarPosition: 'bottom',

  tabBarOptions: { 
  
      showIcon: false ,
      showLabel: true,
      activeTintColor: '#171F33',
      inactiveTintColor: '#586589',
     
},


   tabStyle: {}
};

export default createMaterialTopTabNavigator(CalculatorRoutes,  config);
