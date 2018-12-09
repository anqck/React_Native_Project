import Calculator from '../../screens/Calculator';
import React, { Component } from 'react';
import { createStackNavigator,createBottomTabNavigator,createMaterialTopTabNavigator  } from 'react-navigation';
import TransactionEditor from '../../screens/TransactionEditor'
import colors from '../../styles/colors';
import Bookmarks from '../../screens/Bookmarks'
import { StyleSheet, Text, View } from 'react-native';

const ExpenseRoutes = {
    ExpenseCalculator: { screen: Calculator ,navigationOptions: () => ({

        header: null,
    })},
    'AddExpense': { screen: TransactionEditor ,navigationOptions: () => ({
        tabBarLabel: 'CHI',
        tabBarVisible: false,
        
    })},
  };
  
  const IncomeRoutes = {
    IncomeCalculator: { screen:props => <Calculator {...props} type="income" />,navigationOptions: () => ({

        header: null,
    })},
    'AddIncome': { screen: TransactionEditor ,navigationOptions: () => ({
        tabBarLabel: 'THU',
        tabBarVisible: false,
      
    })},
  };
  
  
const ExpenseNav = createStackNavigator(ExpenseRoutes);
const IncomeNav = createStackNavigator(IncomeRoutes);

ExpenseNav.navigationOptions = ({ navigation }) => {

    let tabBarVisible = true;
    let swipeEnabled = true;

    let routeName = navigation.state.routes[navigation.state.index].routeName

    if ( routeName == 'AddExpense' ) {
        tabBarVisible = false,
        swipeEnabled= false
    }

    return {
        tabBarVisible,
        swipeEnabled,
    }
}

IncomeNav.navigationOptions = ({ navigation }) => {

    let tabBarVisible = true;
    let swipeEnabled = true;

    let routeName = navigation.state.routes[navigation.state.index].routeName

    if ( routeName == 'AddIncome' ) {
        tabBarVisible = false,
        swipeEnabled= false
    }

    return {
        tabBarVisible,
        swipeEnabled,
    }
}

const CalculatorRoutes = {
    IncomeCalculator: {
        screen: IncomeNav,
        navigationOptions: () => ({
            tabBarLabel:  <Text style={{ fontSize: 15, color: colors.black ,fontWeight :'bold'}}> THU </Text>,
            
        })
    },
    ExpenseCalculator: {
        screen: ExpenseNav,
        navigationOptions: () => ({
            tabBarLabel:  <Text style={{ fontSize: 15, color: colors.black ,fontWeight :'bold'}}> CHI </Text>,
        })
    },

    
    
};


export default CalculatorRoutes;
