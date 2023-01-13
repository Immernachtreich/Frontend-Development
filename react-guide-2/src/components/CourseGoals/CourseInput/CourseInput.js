import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {

    if(event.target.value.trim() !== '') {
      setIsValid(true);
    }

    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if(enteredValue.trim() === '') {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);

    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={ `form-control ${ !isValid ? 'invalid' : '' }` }>
        <label> Course Goal </label>
        <input 
          type="text" 
          onChange={goalInputChangeHandler} 
          value={ enteredValue }/>
      </div>
      <Button type="submit" className={ !isValid ? 'Invalid-Button' : '' }>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
