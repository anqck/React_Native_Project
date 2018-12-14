// import React, { Component } from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import {TouchableWithoutFeedback, View} from "react-native";
// import {createBottomTabNavigator,  TabNavigator, StackNavigator,createAppContainer} from 'react-navigation';
// import ViewOverflow from 'react-native-view-overflow';
import { createStackNavigator } from 'react-navigation';

import screens from '../constants/screens';
import NavigatorTab from './NavigatorTab';


// import AccountsOverview from '../screens/AccountsOverview';

// import Bookmarks from '../screens/Bookmarks';
// import {
//     MaterialIcons,
//     MaterialCommunityIcons,
//     SimpleLineIcons,
//     Entypo,
//     Ionicons,
//   } from '@expo/vector-icons';

// const BaseNavigator = createBottomTabNavigator({
//     Bookmarks: {
//         screen: Bookmarks,
//         navigationOptions: () => ({
//             tabBarLabel: '',
//             tabBarIcon: ({tintColor}) => (
//                 <Icon
//                     name="heart"
//                     color={tintColor}
//                     size={24}
//                 />
//             )
//         })
//     },
//     Likes: {
//         screen: Bookmarks,
//         navigationOptions: () => ({
//             tabBarLabel: 'Home',
//             tabBarIcon: ({tintColor}) => (
//                 <Entypo name="wallet" size={24} color={tintColor} />
//             )
//         })
//     },
//     Adding: {
//         screen: Bookmarks,
//         navigationOptions: () => ({
//             tabBarIcon: ({tintColor}) => (
//                 <View style={{
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     width: 70,
//                     height: 70,
//                     borderRadius: 70 / 2,
//                     backgroundColor: '#48A2F8',
//                 }}>
//                     <Icon name="plus" size={24} color={tintColor}/>
//                 </View>
//             )
//         })
//     },
//     Private: {
//         screen: Bookmarks,
//         navigationOptions: () => ({
//             tabBarIcon: ({tintColor}) => (
//                 <Icon
//                     name="lock"
//                     color={tintColor}
//                     size={24}
//                 />
//             )
//         })
//     },
//     Profile: {
//         screen: Bookmarks,
//         navigationOptions: () => ({
//             tabBarIcon: ({tintColor}) => (
//                 <Icon
//                     name="user"
//                     color={tintColor}
//                     size={24}
//                 />
//             )
//         })
//     }
// }, {
    
//     tabBarOptions: {
//         showLabel: false,
//         activeTintColor: '#F8F8F8',
//         inactiveTintColor: '#586589',
//         style: {
//             backgroundColor: '#171F33'
//         },
//         tabStyle: {}
//     }
// });




// const defaultGetStateForAction = BaseNavigator.router.getStateForAction;

// const App1 = createAppContainer(BaseNavigator);
// export {App1};

const routes = {
  [screens.TabbedRoot]: {
    screen: NavigatorTab,
    headerMode: 'screen',
    navigationOptions: {
      header: null,
    },
  },
};



export default createStackNavigator(routes);


