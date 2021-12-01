import React, { useState, useContext } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { UserContext } from '../data/UserContext';
import { PageContext } from '../data/PageContext';

const clientId = "136092104401-1s09m7fo1f1gqr3hh333bnl7q6f4gc7d.apps.googleusercontent.com";

function Login() {

    const [user, setUser] = useContext(UserContext)
    const [page, setPage] = useContext(PageContext)
    const [showloginButton, setShowloginButton] = useState(true);

    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);


        const userEmail = res.profileObj.email;
        const requestBody = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({'email': userEmail})
        };
        
        fetch('https://soaringeagles.herokuapp.com/user', requestBody)
            .then(res => res.json())
            .then(
                (data) => {
                    setUser(data)
                },
                (data) => {
                    setUser('viewer')
                }
            )
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        setUser(undefined)
        setPage('home')
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
    };

    return (
    
        <div>
            { showloginButton &&
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />}

            { !showloginButton &&
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Logout"
                    onLogoutSuccess={onSignoutSuccess}
                />}
        </div>
    );
}

export default Login;