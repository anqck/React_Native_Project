import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableWithoutFeedback, View} from "react-native";
import {
    MaterialIcons,
    MaterialCommunityIcons,
    SimpleLineIcons,
    Entypo,
    Ionicons,
  } from '@expo/vector-icons';

import Bookmarks from '../../screens/Bookmarks';


const Routes = {
        Bookmarks: {
            screen: Bookmarks,
            navigationOptions: () => ({
                tabBarLabel: '',
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="home"
                        color={tintColor}
                        size={24}
                    />
                )
            })
        },
        Likes: {
            screen: Bookmarks,
            navigationOptions: () => ({
                tabBarLabel: 'Home',
                tabBarIcon: ({tintColor}) => (
                    <Entypo name="wallet" size={24} color={tintColor} />
                )
            })
        },
        Adding: {
            screen: Bookmarks,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 70,
                        height: 70,
                        borderRadius: 70 / 2,
                        backgroundColor: '#48A2F8',
                    }}>
                        <Icon name="plus" size={24} color={tintColor}/>
                    </View>
                )
            })
        },
        Private: {
            screen: Bookmarks,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <MaterialIcons
                        name="insert-chart"
                        color={tintColor}
                        size={24}
                    />
                )
            })
        },
        Profile: {
            screen: Bookmarks,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="cog"
                        color={tintColor}
                        size={24}
                    />
                )
            })
        },
    };

export default Routes;
