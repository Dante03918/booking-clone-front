import React from 'react';
import { NavLink } from "react-router-dom";
import styleClasses from './NavigationItem.module.css';


const NavigationItem = (props) => {
    return(
        <ul className={styleClasses.NavigationItems}>
            <li className={styleClasses.NavigationItem}>
                <NavLink to={props.link}>{props.title}</NavLink>
            </li>
        </ul>
    )
}
export default NavigationItem;