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
                clientId="2872629209-8glte87ut0c6kgnse8fhfnu7h8ltehp8.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        
        </div>
    )
};

export default LoginBttn;