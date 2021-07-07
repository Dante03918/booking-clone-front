import React, {useState} from 'react';
import NavigationItem from "./NavigationItem";
import styleClasses from './NavigationItem.module.css';

const NavigationItemWrapper = () => {

    const [isLogged, setIsLogged] = useState(true);

    return (

        <ul className={styleClasses.NavigationItems}>
            <NavigationItem link="/login" title="Sign In"/>
            <NavigationItem link="/signup" title="Sign Up"/>
            {isLogged ? <NavigationItem setIsLogged={setIsLogged} link="/logout" title="Log Out"/> : null}
        </ul>
    )
}
export default NavigationItemWrapper;