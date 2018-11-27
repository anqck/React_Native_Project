import { TabNavigator,createBottomTabNavigator  } from 'react-navigation';

import Routes from './routes/RootRoutes';

const config = {
  animationEnabled: false,
  tabBarPosition: 'bottom',
  
  tabBarOptions: { 
  
      showIcon: true ,
      showLabel: false,
      activeTintColor: '#171F33',
      inactiveTintColor: '#586589',
     
},


   tabStyle: {}
};

export default createBottomTabNavigator(Routes,  config);
