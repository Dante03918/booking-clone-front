import React, {useEffect, useState} from 'react';

const LogOut = () => {

    const [isLogged, setIsLogged] = useState(true)


    if(isLogged){
        localStorage.removeItem('user')
        return(
            <p>Wylogowano</p>
        )} else {
            return(
                <p>Blad</p>
            )
        }



}
export default LogOut;