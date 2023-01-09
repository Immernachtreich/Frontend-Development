import './ExpenseForm.css';

const ExpenseForm = () => {

    const inputDetectionHandler = (e) => {
        console.log(e.target.value)
    }

    return (
        <form>
            <div className='new-expense__controls'>

                <div className='new-expense__control'>
                    <label> Title </label>
                    <input type='text' onChange={ inputDetectionHandler } />
                </div>

                <div className='new-expense__control'>
                    <label> Amount </label>
                    <input type='number' min='0.01' step='0.01' onChange={ inputDetectionHandler } />
                </div>

                <div className='new-expense__control'>
                    <label> Date </label>
                    <input type='Date' min='2019-01-01' max='2030-12-31' onChange={ inputDetectionHandler } />
                </div>

            </div>

            <div className='new-expense__actions'>
                <button type='Submit'> Add Expense </button>
            </div>  
        </form>
    )
}

export default ExpenseForm;
