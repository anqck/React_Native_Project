import React, { Component } from 'react';
import { Text } from 'react-native';

import screens from '../../constants/screens';
import TransactionsStatistics from '../../screens/TransactionsStatistics';
import Trends from '../../screens/Trends';
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