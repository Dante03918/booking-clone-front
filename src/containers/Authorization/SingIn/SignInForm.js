import React, { useState } from 'react';
import Input from "../../../components/UI/Input/Input";
import axios from 'axios';

const SignInForm = (props) =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("null");
    const [isValid, setIsValid] = useState(false);

    const checkValidity = (props) => {
        const emailPattern =   /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
        const passPattern =  /.{8,}/;
        const validation = {
            emailIsValid: false,
            passwordIsValid: false
        }
        validation.emailIsValid = emailPattern.test(props.email);
        validation.passwordIsValid =passPattern.test(props.password);
        return(
            validation
        )
    }
    const loginHandler = (event) => {
        event.preventDefault();

        const credentials = {
            user: email,
            password: password
        }
       setIsValid(checkValidity({email: email, password: password} ));


        if(!isValid.email && !isValid.password){
            alert("Something went wrong. Email should have example@com.pl form and password should have 8 chars or more.")
        } else {
            axios.post("http://localhost:8080/login", credentials)
                .then(response => props.history.push("/"))
        }
    }
    const inputChangeHandler = (event, type) => {
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