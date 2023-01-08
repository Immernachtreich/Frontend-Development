import './ExpenseItem.css';

function ExpenseItem(props) {

    const expenseDate = props.date.toLocaleDateString();
    const expenseTitle = props.title;
    const expensePrice = props.amount;
    const expenseLocation = 'Insurance Company';

    return (
        <div className='expense-item'>
            <div> { expenseDate } </div>
            <div className='expense-item__description'>
                <h2> { expenseTitle } </h2>
                <div className='expense-item__price'> ${ expensePrice } </div>
                <div> { expenseLocation } </div>
            </div>
        </div>
    );
}

export default ExpenseItem;