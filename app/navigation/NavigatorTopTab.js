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
      style: {
        //Styling of Tab
        backgroundColor: '#48A2F8',
      },
      indicatorStyle: {
        //Active Tab broder bottom color and width 
        borderBottomColor: '#87B56A',
        borderBottomWidth: 4,
      },
},


   tabStyle: {}
};

export default createMaterialTopTabNavigator(CalculatorRoutes,  config);
