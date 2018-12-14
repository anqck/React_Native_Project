import { Entypo, MaterialIcons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import AccountsNavigator from '../navigators/AccountsNavigator';
import CategoriesNavigator from '../navigators/CategoriesNavigator';
import TransactionsNavigator from '../navigators/TransactionsNavigator';
import TrendsNavigator from '../navigators/TrendsNavigator';
import CalculatorNav from '../NavigatorTopTab';


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
            screen: TrendsNavigator,
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
