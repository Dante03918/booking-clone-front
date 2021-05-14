import React, { useEffect } from 'react';

const LoggedOut = () => {

    useEffect( () => {
        if(localStorage.getItem('user')){
            localStorage.removeItem('user');
        }
    })
    return(
        <div>
            <p>Wylogowano poprawnie</p>
        </div>
    )
}
export default LoggedOut;