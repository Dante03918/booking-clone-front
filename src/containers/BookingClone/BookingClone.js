import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Button from "../../components/UI/Button/Button";

const BookingClone = (props) => {

    return (
        <Navbar>
            <Button clicked={false}>Sign In</Button>
            <Button clicked={false}>Sign Up</Button>
        </Navbar>
    )
}
export default BookingClone;