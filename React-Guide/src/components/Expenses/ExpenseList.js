import ExpenseItem from './ExpenseItem';

import './ExpenseList.css'

const ExpenseList = props => {

    const filteredExpenses = props.expenses;

    if(filteredExpenses.length === 0) {

        return <h2 className='expenses-list__fallback'> No Expenses found </h2>

    } else if(filteredExpenses.length === 1){

        return <ul className='expenses-list'>
            { filteredExpenses.map(e => {
                return (<ExpenseItem
                    key={ e.id }
                    title={ e.title }
                    amount={ e.amount }
                    date={ e.date }
                    location={ e.location }
                />);
            }) }
            <h2 className='expenses-list__fallback'> Only single Expense here. Please add more... </h2>
        </ul>
            
    } else {
        return (
            <ul className='expenses-list'>
                { filteredExpenses.map(e => {
                    return (<ExpenseItem
                        key={ e.id }
                        title={ e.title }
                        amount={ e.amount }
                        date={ e.date }
                        location={ e.location }
                    />);
                }) }
            </ul>
        )
    }
}

export default ExpenseList;