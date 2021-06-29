import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import styleClasses from './BookingClone.module.css';
import NavigationItemWrapper from "../../components/Navigation/NavigationItemWrapper";

const BookingClone = (props) => {

    return (
        <Fragment>
            <Navbar>
                <NavigationItemWrapper />
            </Navbar>
            <main className={styleClasses.Content}>
                {props.children}
            </main>
        </Fragment>

    )
}
export default BookingClone;