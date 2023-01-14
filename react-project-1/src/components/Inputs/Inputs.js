// Package Imports
import { useState, useRef } from 'react';

// Component Imports
import Card from '../UI/Card';

// CSS file imports
import './Inputs.css';

const Inputs = props => {
 
    // const [name, setName] = useState('');
    // const [age, setAge] = useState('');

    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const collegeInputRef = useRef(); 

    const addUser = e => {

        e.preventDefault();
        
        const name = nameInputRef.current.value;
        const age = ageInputRef.current.value;
        const college = collegeInputRef.current.value;

        if(name === '' || age.toString() === '' || college === '') {
            props.onEmpty(false, 'Please Enter All The Fields');

        } else {
            const userData = {
                id: Math.random().toString(),
                name: name,
                age: age,
                college: college
            };
    
            props.addUser(userData);
    
            nameInputRef.current.value = '';
            ageInputRef.current.value = '';
            collegeInputRef.current.value = '';
        }
    };

    return <Card>
        <form className='Input-Form' onSubmit={ addUser }>

            <label> Username </label>
            <input type='text' ref={ nameInputRef } />

            <label> Age (Years) </label>
            <input type='number' ref={ ageInputRef } />

            <label> College Name </label>
            <input type='text' ref={ collegeInputRef } />

            <button> Add User </button>
        </form>
    </Card>
}

export default Inputs;