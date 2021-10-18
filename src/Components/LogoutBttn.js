import React from 'react'
import { GoogleLogout } from 'react-google-login';



const LogoutBttn = () => {
        const onSuccess= () => {
        console.log('here')
    };

    return (
    
        <div>
            <GoogleLogout
                clientId="2872629209-8glte87ut0c6kgnse8fhfnu7h8ltehp8.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        
        </div>
    )
};

export default LogoutBttn;