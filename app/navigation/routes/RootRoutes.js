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
import TransactionsStatistics from '../../screens/TransactionsStatistics';
import AccountsNavigator from '../navigators/AccountsNavigator';
import Trends from '../../screens/Trends';
import CalculatorNav from '../NavigatorTopTab';
import CategoriesNavigator from '../navigators/CategoriesNavigator';
import TransactionsNavigator from '../navigators/TransactionsNavigator';


const Routes = {
        Bookmarks: {
            screen: TransactionsNavigator,
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
        AccountsM: {
            screen: AccountsNavigator,
            navigationOptions: () => ({
                tabBarLabel: 'Home',
                tabBarIcon: ({tintColor}) => (
                    <Entypo name="wallet" size={24} color={tintColor} />
                )
            })
        },
        Adding: {
            screen: CalculatorNav,
            
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
                       <Icon name="plus" size = {24} color={tintColor}/>
                    </View>
                )
            })
        },
        // Adding: {
        //     screen: () => null,
        //     navigationOptions: () => ({
        //         tabBarIcon: <AddButton/>
        //     })
        // },
        Private: {
            screen: TransactionsStatistics,
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
            screen: CategoriesNavigator,
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
