import React from 'react';
import styleClasses from './Navbar.module.css';

const Navbar = (props) => {
    return(
        <div className={styleClasses.Navbar}>
            <div className={styleClasses.Username}>
                {props.loggedUser ? <p>Zalogowany użytkownik: {props.loggedUser}</p> : null
                }
            </div>
            {props.children}
        </div>
        )
}
export default Navbar;