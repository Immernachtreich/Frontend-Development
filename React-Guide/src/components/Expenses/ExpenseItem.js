// JS Imports
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

// CSS Imports
import './ExpenseItem.css';

const ExpenseItem = props => {

    return (
        <Card className='expense-item'>
            <ExpenseDate date={ props.date } />
            <ExpenseDetails expense={ props } />
        </Card>
    );
}

export default ExpenseItem;