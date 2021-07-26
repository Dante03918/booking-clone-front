import React, {useEffect} from 'react';
import {useHistory, useLocation} from 'react-router-dom';

const LogOut = (props) => {

    let history = useHistory();

    let location = useLocation();
    useEffect(() => {
        localStorage.clear();
        location.setLogged(false);
        history.push('/');
        props.setUser(null);
    }, [])

    return(
        <div></div>
    )
}


export default LogOut;