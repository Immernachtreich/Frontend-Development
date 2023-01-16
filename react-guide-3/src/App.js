import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('Logged In')) {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('Logged In', 'Yes');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('Logged In')
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <AuthContext.Provider value={ { isLoggedIn: isLoggedIn } }>
        <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
        
      </AuthContext.Provider>
    </React.Fragment>
  );
}

export default App;
