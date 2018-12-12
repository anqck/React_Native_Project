
import screens from '../../constants/screens';
import Trends from '../../screens/Trends';
import TransactionsStatistics from '../../screens/TransactionsStatistics';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../styles/colors';

const TrendsRoutes = {
    [screens.Trends]: {
        screen: Trends,
        navigationOptions: () => ({
            tabBarLabel:  <Text style={{ fontSize: 14, color: colors.black ,fontWeight :'bold'}}> Thu chi theo thời gian </Text>,
            
        })
    },
    [screens.TransactionsStatistics]: {
        screen: TransactionsStatistics,
        navigationOptions: () => ({
            tabBarLabel:  <Text style={{ fontSize: 14, color: colors.black ,fontWeight :'bold'}}> Thu chi theo danh mục </Text>,
        })
    },

    
    
};


export default TrendsRoutes;