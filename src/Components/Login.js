import React, { useState } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = "136092104401-1s09m7fo1f1gqr3hh333bnl7q6f4gc7d.apps.googleusercontent.com";

function Login() {


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
        
        fetch('http://localhost:9000/user', requestBody)
            .then(res => res.json())
            // .then(data => obj = data)
            //.then(data => setAlumniData(data))
            .then(data => console.log(data))

    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
    };

    return (
    
        <div>
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null }

            { !showloginButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Logout"
                    onLogoutSuccess={onSignoutSuccess}
                /> : null }
        </div>
    );
}

export default Login;