import Calculator from '../../screens/Calculator';
import React, { Component } from 'react';
import { createStackNavigator,createBottomTabNavigator,createMaterialTopTabNavigator  } from 'react-navigation';
import Dummmy from '../../screens/Bookmarks'


const ExpenseRoutes = {
    ExpenseCalculator: { screen: Calculator ,navigationOptions: () => ({

        header: null,
    })},
    AddExpense: { screen: Dummmy ,navigationOptions: () => ({
        tabBarLabel: 'CHI',
        tabBarVisible: false,
      
    })},
  };
  
  const IncomeRoutes = {
    IncomeCalculator: { screen:props => <Calculator {...props} type="income" />,navigationOptions: () => ({

        header: null,
    })},
    AddIncome: { screen: Dummmy ,navigationOptions: () => ({
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
            tabBarLabel: 'THU',
            
        })
    },
    ExpenseCalculator: {
        screen: ExpenseNav,
        navigationOptions: () => ({
            tabBarLabel: 'CHI',
        })
    },

    
    
};


export default CalculatorRoutes;
