import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import NavigationItem from "../../components/Navigation/NavigationItem";
import styleClasses from './BookingClone.module.css';

const BookingClone = (props) => {

    return (
        <Fragment>
            <Navbar>
                <NavigationItem link="/login" title="Sign In"/>
                <NavigationItem link="/signup" title="Sign Up"/>
                <NavigationItem link="/loggedout" title="Log out"/>
            </Navbar>
            <main className={styleClasses.Content}>
                {props.children}
            </main>
        </Fragment>

    )
}
export default BookingClone;