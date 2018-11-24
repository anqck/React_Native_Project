import { TabNavigator } from 'react-navigation';

import Routes from './routes/RootRoutes';

const config = {
  animationEnabled: false,
  tabBarPosition: 'bottom',
  showLabel: false,
  activeTintColor: '#F8F8F8',
  inactiveTintColor: '#586589',
  style: {
        backgroundColor: '#171F33'
  },
   tabStyle: {}
};

export default TabNavigator(Routes, config);
