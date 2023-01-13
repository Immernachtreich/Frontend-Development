import { useState } from 'react';

import './App.css';

import Inputs from './components/Inputs/Inputs';
import Lists from './components/Lists/Lists';
import Popup from './components/UI/Popup';

const dummyUsers = [
    {
      id: 0,
      name: 'One',
      age: 45
    },
    {
      id: 1,
      name: 'Two',
      age: 65
    }
  ]

function App() {

  const [users, setUsers] = useState('');
  const [popupClass, setPopupClass] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  
  const addUser = (userData) => {

    setUsers(prevUsers => {
      return [...prevUsers, userData];
    });

  };

  const onEmpty = (isValid, message) => {
    if(!isValid) {
      setTitle('Invalid Input');
      setMessage(message);
      setPopupClass('Invalid');

    } else {
      setTitle('Invalid Input');
      setMessage(message);
      setPopupClass('');
    }
  }

  return (
    <div>
      <Inputs addUser={ addUser } onEmpty={ onEmpty }/>
      <Lists users={ users } />
      <Popup 
        className={ `Popup-Div ${popupClass}` } 
        onEmpty={ onEmpty } 
        title={ title } 
        message={ message }/>
    </div>
  );
}

export default App;
