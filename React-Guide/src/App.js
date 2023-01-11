// Package Imports
import React from 'react';
import { useState } from 'react';

// Component Imports
import ExpenseItem from './components/Expenses/ExpenseItem';
import Card from './components/UI/Card';
import NewExpense from './components/NewExpenses/NewExpense';

const App = () => {
    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
            location: 'Walmart'
        },
        { 
            id: 'e2', 
            title: 'New TV', 
            amount: 799.49, 
            date: new Date(2021, 2, 12),
            location: 'Target'
        },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
            location: 'ICICI'
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
            location: 'IKEA'
        },
    ];

    const addExpenseHandler = expense => {
        console.log(expense);
    }

    return (
        <div>
            <NewExpense onAddExpense={ addExpenseHandler }/>
            <Card className='expenses'>
                { expenses.map(e => {
                    return <ExpenseItem
                        title={ e.title }
                        amount={ e.amount }
                        date={ e.date }
                        location={ e.location }
                    />
                }) }
            </Card>
        </div>
    );
}

export default App;
