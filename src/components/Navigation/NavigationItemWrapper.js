import React from 'react';
import NavigationItem from "./NavigationItem";
import styleClasses from './NavigationItem.module.css';

const NavigationItemWrapper = () => {
    return (

        <ul className={styleClasses.NavigationItems}>
            <NavigationItem link="/login" title="Sign In"/>
            <NavigationItem link="/signup" title="Sign Up"/>
        </ul>
    )
}
export default NavigationItemWrapper;