import React, { useState, useRef } from 'react';

const ComponentLogin = (props) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const valueLogin = useRef();
    const valuePassword = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        setLogin(valueLogin.current.value);
        setPassword(valuePassword.current.value);

        valueLogin.current.value = "";
        valuePassword.current.value = "";
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div><label>Login</label></div>
                <div>
                    <input type="text" ref={valueLogin} />
                </div>
                <div><label>Password</label></div>
                <div>
                    <input type="password" ref={valuePassword} />
                </div>
                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
            <div>Login: {login}, Password: {password}</div>
        </>
    );
};

export default ComponentLogin;