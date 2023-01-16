import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {

  switch(action.type) {
    case 'USER_INPUT': {
      return { value: action.val, isValid: action.val.includes('@') };
    }
    case 'INPUT_BLUR': {
      return { value: state.value, isValid: state.value.includes('@') };
    }
  }

  return { value: '', isValid: false };
}

const passwordReducer = (state, action) => {

  switch(action.type) {
    case 'USER_INPUT': {
      return { value: action.val, isValid: action.val.trim().length > 6 };
    }
    case 'INPUT_BLUR': {  
      return { value: state.value, isValid: state.value.trim().length > 6 };
    }
  };

  return { value: '', isValid: false};
}

const collegeReducer = (state, action) => {

  switch(action.type) {
    case 'USER_INPUT': {
      return { value: action.val, isValid: action.val.trim() !== '' };
    }
    case 'INPUT_BLUR': {  
      return { value: state.value, isValid: state.value.trim() !== '' };
    }
  };

  return { value: '', isValid: false};
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();

  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();

  // const [enteredCollege, setEnteredCollege] = useState('');
  // const [collegeIsValid, setCollegeIsValid] = useState('');

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: null });
  const [collegeState, dispatchCollege] = useReducer(collegeReducer, { value: '', isValid: null });

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    setFormIsValid(
      emailState.isValid && passwordState.isValid && collegeState.isValid
    );
  }, [emailState.value, passwordState.value, collegeState.value])

  // ------------------------------------
  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
  };
  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
  }
  const collegeChangeHandler = (event) => {
    dispatchCollege({ type: 'USER_INPUT', val: event.target.value });
  }

  // ------------------------------------
  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };
  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };
  const validateCollegeHandler = () => {
    dispatchCollege({ type: 'INPUT_BLUR' });
  }

  // ------------------------------------
  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input 
          id='email'
          label='Email'
          type='email'
          isValid={ emailState.isValid }
          value={ emailState.value }
          onChange={ emailChangeHandler }
          onBlur={ validateEmailHandler }
        />
        <Input 
          id='password'
          label='Password'
          type='password'
          isValid={ passwordState.isValid }
          value={ passwordState.value }
          onChange={ passwordChangeHandler }
          onBlur={ validatePasswordHandler }
        />
        <Input 
          id='college'
          label='College Name'
          type='text'
          isValid={ collegeState.isValid }
          value={ collegeState.value }
          onChange={ collegeChangeHandler }
          onBlur={ validateCollegeHandler }
        />
        
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
