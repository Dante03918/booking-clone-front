import React, {Fragment, useEffect} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import NavigationItem from "../../components/Navigation/NavigationItem";
import styleClasses from './BookingClone.module.css';
import Accommodation from "../Accommodation/Accommodation";
import NavigationItemWrapper from "../../components/Navigation/NavigationItemWrapper";

const BookingClone = (props) => {

    return (
        <Fragment>
            <Navbar>
                <NavigationItemWrapper />
            </Navbar>
            <main className={styleClasses.Content}>
                <Accommodation />

            </main>
        </Fragment>

    )
}
export default BookingClone;