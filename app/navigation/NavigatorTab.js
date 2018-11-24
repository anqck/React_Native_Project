import { TabNavigator,createBottomTabNavigator  } from 'react-navigation';

import Routes from './routes/RootRoutes';

const config = {
  animationEnabled: false,
  tabBarPosition: 'bottom',

  tabBarOptions: { 
  
      showIcon: true ,
      showLabel: false,
      activeTintColor: '#F8F8F8',
      inactiveTintColor: '#586589',
     
},

  activeTintColor: '#F8F8F8',
  inactiveTintColor: '#586589',
  style: {
        backgroundColor: '#171F33'
  },
   tabStyle: {}
};

export default createBottomTabNavigator(Routes,  config);
