// JS Imports
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

// CSS Imports
import './ExpenseItem.css';

const ExpenseItem = props => {

    const clickHandler = e => {
        console.log(e.target.parentElement);
    }

    const deleteHandler = e => {
        e.target.parentElement.remove();
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={ props.date } />
            <ExpenseDetails expense={ props } />
            <button onClick={ clickHandler }> Change Title </button>
            <button onClick={ deleteHandler }> Delete Expense </button>
        </Card>
    );
}

export default ExpenseItem;