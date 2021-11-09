import React from 'react'
import { GoogleLogin } from 'react-google-login';



const LoginBttn = () => {
        const onSuccess = (response) => {
            console.log('[Login Sucess] currentUser:', response.profileObj);
        };
        const onFailure = (response) => {
            console.log('[Login failed] res:', response);
        };

    return (
    
        <div>
            <GoogleLogin
                clientId="136092104401-1s09m7fo1f1gqr3hh333bnl7q6f4gc7d.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
            />
        
        </div>
    )
};

export default LoginBttn;