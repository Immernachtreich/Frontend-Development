import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = e => {
        setEnteredTitle(e.target.value);
    };
    const amountChangeHandler = e => {
        setEnteredAmount(e.target.value);
    };
    const dateChangeHandler = e => {
        setEnteredDate(e.target.value);
    };
    const submitExpenseHandler = e => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(expenseData);
    }

    return (
        <form onSubmit={ submitExpenseHandler }>
            <div className='new-expense__controls'>

                <div className='new-expense__control'>
                    <label> Title </label>
                    <input type='text' onChange={ titleChangeHandler } />
                </div>

                <div className='new-expense__control'>
                    <label> Amount </label>
                    <input type='number' min='0.01' step='0.01' onChange={ amountChangeHandler } />
                </div>

                <div className='new-expense__control'>
                    <label> Date </label>
                    <input type='Date' min='2019-01-01' max='2030-12-31' onChange={ dateChangeHandler } />
                </div>

            </div>

            <div className='new-expense__actions'>
                <button type='Submit'> Add Expense </button>
            </div>  
        </form>
    );
}

export default ExpenseForm;
