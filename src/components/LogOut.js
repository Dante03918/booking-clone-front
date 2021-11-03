import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom';

const LogOut = (props) => {

    props.history.push('/');
    props.setUser(null);

    return(
        <div></div>
    )
}

export default withRouter(LogOut);