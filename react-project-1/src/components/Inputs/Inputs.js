// Package Imports
import { useState } from 'react';

// Component Imports
import Card from '../UI/Card';

// CSS file imports
import './Inputs.css';

const Inputs = props => {
 
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const onNameChange = e => {
        setName(e.target.value);
    };

    const onAgeChange = e => {
        setAge(e.target.value);
    };

    const addUser = e => {

        e.preventDefault();

        if(name === '' && age.toString() === '') {
            props.onEmpty(false, 'Please Enter All The Fields');
            
        } else if(name === '') {
            props.onEmpty(false, 'Please Enter Name');

        } else if(age.toString() === '') {
            props.onEmpty(false, 'Please Enter Age');

        } else {
            const userData = {
                id: Math.random().toString(),
                name: name,
                age: age
            };
    
            props.addUser(userData);
    
            setName('');
            setAge('');
        }
    };

    return <Card>
        <form className='Input-Form' onSubmit={ addUser }>

            <label> Username </label>
            <input type='text' value={ name } onChange={ onNameChange }/>

            <label> Age (Years) </label>
            <input type='number' value={ age } onChange= { onAgeChange } />

            <button> Add User </button>
        </form>
    </Card>
}

export default Inputs;