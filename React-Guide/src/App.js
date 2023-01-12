// Package Imports
import React from 'react';
import { useState } from 'react';

// Component Imports
import NewExpense from './components/NewExpenses/NewExpense';
import ExpenseFilter from './components/Expenses/ExpenseFilter';
import ExpenseList from './components/Expenses/ExpenseList';

import Card from './components/UI/Card';

const DUMMY_EXPENSES = [
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

const App = () => {
    
    const [filteredYear, setFilteredYear] = useState('2020');
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = expense => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses];
        });
    }

    const filterChangeHandler =  selectedYear => {  
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = expenses.filter(e => e.date.getFullYear() == filteredYear);

    return (
        <div>
            
            <NewExpense onAddExpense={ addExpenseHandler }/>
            <Card className='expenses'>
                <ExpenseFilter selected={ filteredYear } onChange={ filterChangeHandler } />
                <ExpenseList expenses={ filteredExpenses } />
            </Card>

        </div>
    );
}

export default App;
