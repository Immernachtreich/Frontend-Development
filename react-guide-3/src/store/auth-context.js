import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});

export const AuthContextProvider = props => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('Logged In')) {
            setIsLoggedIn(true);
        }
    }, []);

    const logoutHandler = () => {
        localStorage.removeItem('Logged In')
        setIsLoggedIn(false);
    }

    const loginHandler = () => {
        localStorage.setItem('Logged In', 'Yes');
        setIsLoggedIn(true);
    }

    return <AuthContext.Provider value={ { 
        isLoggedIn: isLoggedIn, 
        onLogout: logoutHandler, 
        onLogin: loginHandler
    } }> { props.children } </AuthContext.Provider>;
}

export default AuthContext;