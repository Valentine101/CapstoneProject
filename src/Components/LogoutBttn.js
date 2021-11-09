import React from 'react'
import { GoogleLogout } from 'react-google-login';



const LogoutBttn = () => {
        const onSuccess= () => {
        console.log('here')
    };

    return (
    
        <div>
            <GoogleLogout
                clientId="136092104401-1s09m7fo1f1gqr3hh333bnl7q6f4gc7d.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        
        </div>
    )
};

export default LogoutBttn;