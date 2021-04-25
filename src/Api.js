import React from 'react';
import axios from 'axios';

const postRequest = (props) => {

    const credentials = {
        email: props.email,
        password: props.password
    }
    console.log("Request " + credentials.email + "  " + credentials.password)
    // axios.post("http://localhost:8080/login", credentials)
    //     .then(() => props.history.push("/"))
}
export default postRequest;