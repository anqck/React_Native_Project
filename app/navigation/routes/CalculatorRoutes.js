import Calculator from '../../screens/Calculator';
import React, { Component } from 'react';
import { createStackNavigator,createBottomTabNavigator,createMaterialTopTabNavigator  } from 'react-navigation';
import Dummmy from '../../screens/Bookmarks'


const ExpenseRoutes = {
    ExpenseCalculator: { screen: Calculator },
    AddExpense: { screen: Dummmy ,navigationOptions: () => ({
        tabBarLabel: 'Income',
        tabBarVisible: false,
    })},
  };
  
  
  
const ExpenseNav = createStackNavigator(ExpenseRoutes);

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

const CalculatorRoutes = {
    IncomeCalculator: {
        screen: props => <Calculator {...props} type="income" />,
        navigationOptions: () => ({
            tabBarLabel: 'Income',
            
        })
    },
    ExpenseCalculator: {
        screen: ExpenseNav,
        navigationOptions: () => ({
            tabBarLabel: 'Expense',
        })
    },

    
    
};


export default CalculatorRoutes;
