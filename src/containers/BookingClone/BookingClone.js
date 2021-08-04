import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import styleClasses from './BookingClone.module.css';
import NavigationItemWrapper from "../../components/Navigation/NavigationItemWrapper";

const BookingClone = (props) => {

    return (
        <Fragment>
            <Navbar loggedUser={props.loggedUser}>
                <NavigationItemWrapper loggedUser={props.loggedUser} setUser = {props.setUser}/>
            </Navbar>
            <main className={styleClasses.Content}>
                {props.children}
            </main>
        </Fragment>

    )
}
export default BookingClone;