import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';



const LoginBttn = () => {
        const responseGoogle= (response) => {
        console.log(response);
        console.log(response.profileObj);
    }

    return (
    
        <div>
            <GoogleLogin
                clientId="136092104401-1s09m7fo1f1gqr3hh333bnl7q6f4gc7d.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        
        </div>
    )
};

export default LoginBttn;