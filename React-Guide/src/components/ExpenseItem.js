import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

import './ExpenseItem.css';

function ExpenseItem(props) {

    const { title, location, amount } = props;

    return (
        <div className='expense-item'>
            <ExpenseDate date={ props.date } />
            <ExpenseDetails title={ title } amount={ amount } location={ location } />
        </div>
    );
}

export default ExpenseItem;