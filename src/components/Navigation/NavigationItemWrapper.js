import React from 'react';
import styleClasses from './NavigationItem.module.css';
import Button from '../UI/Button/Button';
import { withRouter } from 'react-router-dom';

const NavigationItemWrapper = (props) => {


    return (

        <ul className={styleClasses.NavigationItems}>
            <Button clicked={() => {props.history.push("/login")}}>Sign In</Button>
            <Button clicked={() => {props.history.push("/signup")}} >Sign Up </Button>
            {props.loggedUser ? <Button clicked={()=>{props.history.push("/logout")}}>Log Out</Button> : null}
            {props.loggedUser ? <Button clicked={()=>{props.history.push("/add")}} >Add ad</Button> : null}
        </ul>
    )
}
export default withRouter(NavigationItemWrapper);