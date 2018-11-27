import Calculator from '../../screens/Calculator';
import React, { Component } from 'react';

const CalculatorRoutes = {
    ExpenseCalculator: {
        screen: Calculator,
        navigationOptions: () => ({
            tabBarLabel: 'Expense',
            
        })
    },

    IncomeCalculator: {
        screen: props => <Calculator {...props} type="income" />,
        navigationOptions: () => ({
            tabBarLabel: 'Income',
            
        })
    },
    
};

export default CalculatorRoutes;
