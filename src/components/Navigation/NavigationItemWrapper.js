import React from 'react';
import NavigationItem from "./NavigationItem";
import styleClasses from './NavigationItem.module.css';

const NavigationItemWrapper = (props) => {


    return (

        <ul className={styleClasses.NavigationItems}>
            <NavigationItem link="/login" title="Sign In"/>
            <NavigationItem link="/signup" title="Sign Up"/>
            {props.loggedUser ? <NavigationItem setUser={props.setUser} link="/logout" title="Log Out"/> : null}
            {props.loggedUser ? <NavigationItem link="/add" title="Add ad"/> : null}
        </ul>
    )
}
export default NavigationItemWrapper;