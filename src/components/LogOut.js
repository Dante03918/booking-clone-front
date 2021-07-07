import React, {useEffect} from 'react';
import {useHistory, useLocation} from 'react-router-dom';

const LogOut = () => {

    let history = useHistory();

    let location = useLocation();
    useEffect(() => {
        localStorage.clear();
        location.setLogged(false);
        history.push('/')

    }, [])

    return(
        <div></div>
    )
}


export default LogOut;