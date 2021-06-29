import React from 'react';
import NavigationItem from "./NavigationItem";
import styleClasses from './NavigationItem.module.css';

const NavigationItemWrapper = () => {

    let logoutButton = <NavigationItem link="/logout" title="Log Out"/>

    if(!localStorage.getItem('user')){
        logoutButton = null
    }
    return (

        <ul className={styleClasses.NavigationItems}>
            <NavigationItem link="/login" title="Sign In"/>
            <NavigationItem link="/signup" title="Sign Up"/>
            {logoutButton}
        </ul>
    )
}
export default NavigationItemWrapper;