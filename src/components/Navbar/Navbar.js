import React from 'react';
import styleClasses from './Navbar.module.css';

const Navbar = (props) => {
    return(
        <div className={styleClasses.Navbar}>
            {props.children}
        </div>
        )
}
export default Navbar;