import React, {useEffect} from 'react';

const LogOut = () => {

    let message = <p>Wylogowano poprawnie</p>


    useEffect(() => {
        if (localStorage.getItem('user')) {
            try {
                localStorage.removeItem('user');

            } catch (Exception) {
                console.log(Exception)
                message = <p>Error occurred</p>
            }
        }
    })


    return (
        <div>
            {message}
        </div>
    )
}
export default LogOut;