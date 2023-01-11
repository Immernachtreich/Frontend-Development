// Package Imports
import { useState } from 'react';

const ExpenseDetails = props => {

    const { location } = props.expense;

    const [title, setTitle] = useState(props.expense.title);
    const [amount, setAmount] = useState(props.expense.amount);

    const clickHandler = e => {
        setTitle('Updated');
    }

    const deleteHandler = e => {
        e.target.parentElement.parentElement.remove();
    }

    const changePriceHandler = e => {
        setAmount('100');
    }

    return (
        <div className='expense-item__description'>
            <h2> { title } </h2>
            <div className='expense-item__location'> { location } </div>
            <div className='expense-item__price'> ${ amount } </div>
            {/* <button onClick={ clickHandler }> Change Title </button>
            <button onClick={ deleteHandler }> Delete Expense </button>
            <button onClick={ changePriceHandler }> Change Price </button> */}
        </div>
    );
}

export default ExpenseDetails;