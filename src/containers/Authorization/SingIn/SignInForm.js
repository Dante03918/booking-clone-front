import React, { useState } from 'react';
import Input from "../../../components/UI/Input/Input";
import axios from 'axios';

const SignInForm = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("null");

    const loginHandler = (event) => {
        event.preventDefault();
        const credentials = {
            email: email,
            password: password
        }

        axios.post("http://localhost:8080/login", credentials);

    }
    const inputChangeHandler = (event, type) => {
        console.log("Inputhandler "+ event.target.value);
            if(type === "email"){
                setEmail(event.target.value);
            } else if (type === "pass") {
                setPassword(event.target.value)
            }

    }
    return(
        <form onSubmit={loginHandler}>
            <Input type="email" title="Enter email" changed={(event) => (inputChangeHandler(event, "email"))}/>
            <Input type="text" title="Enter password" changed={(event) => (inputChangeHandler(event, "pass"))}/>

            <button type="submit">Submit</button>
        </form>
    )

}
export default SignInForm;