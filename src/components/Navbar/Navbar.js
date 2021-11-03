import React from 'react';
import { withRouter } from 'react-router-dom';
import styleClasses from './Navbar.module.css';
import Logo from "../Logo/Logo";

const Navbar = (props) => {
    return(
        <div className={styleClasses.Navbar}>
            <Logo />
            <div className={styleClasses.Wrapper}>
                <div className={styleClasses.Username}>
                    {props.loggedUser ? <p>Zalogowany użytkownik: {props.loggedUser}</p> : null
                    }
                </div>
                {props.children}
            </div>

        </div>
        )
}
export default withRouter(Navbar);