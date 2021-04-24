import React, { Fragment } from 'react';
import { NavLink } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';
import styleClasses from './BookingClone.module.css';

const BookingClone = (props) => {

    return (
        <Fragment>
            <Navbar>
                <NavLink to="/login">Sign In</NavLink>
            </Navbar>
            <main className={styleClasses.Content}>
                {props.children}
            </main>
        </Fragment>

    )
}
export default BookingClone;