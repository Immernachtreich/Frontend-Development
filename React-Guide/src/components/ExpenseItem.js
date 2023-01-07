import './ExpenseItem.css';

function ExpenseItem() {

    const expenseDate = new Date(2016, 2, 28).toLocaleDateString();
    const expenseTitle = 'Car Insurance';
    const expensePrice = 69.99;
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