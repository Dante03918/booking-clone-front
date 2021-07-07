import React from 'react';
import { NavLink } from "react-router-dom";
import styleClasses from './NavigationItem.module.css';


const NavigationItem = (props) => {
    return(

            <li className={styleClasses.NavigationItem}>
                <NavLink to={{
                    pathname: props.link,
                    setLogged: props.setIsLogged
                }}>{props.title}</NavLink>
            </li>

    )
}
export default NavigationItem;