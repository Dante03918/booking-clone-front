import React, {useEffect, useState, useRef} from 'react';
import styleClasses from './SignInForm.module.css';
import {loginRequest} from '../../../Api';


const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("null");
    const [submitted, setSubmitted] = useState(false);
    const [emailInputStyles, setEmailInputStyles] = useState([styleClasses.InputElement]);
    const [passwordInputStyles, setPasswordInputStyles] = useState([styleClasses.InputElement]);
    const [emailErrors, setEmailErrors] = useState('');
    const [passwordErrors, setPasswordErrors] = useState('');

    const isFirstRun = useRef(true);


    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        } else if (submitted) {

            checkValidity();

        }
    }, [submitted])

    const checkValidity = () => {

        const conditions = {
            emailIsValid: true,
            passwordIsValid: true
        }

        const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
        const passPattern = /.{8,}/;
        console.log("check");

        if (!emailPattern.test(email)) {
            setEmailErrors("Email form is invalid");
            emailInputStyles.push(styleClasses.Invalid);

            conditions.emailIsValid = false;

        }
        if (email.length === 0) {
            setEmailErrors("Email is required");
            emailInputStyles.push(styleClasses.Invalid);

            conditions.emailIsValid = false;

        }

        if (!passPattern.test(password)) {
            setPasswordErrors("Password is too short");
            passwordInputStyles.push(styleClasses.Invalid);

            conditions.passwordIsValid = false;
        }
        if (password.length === 0) {
            setPasswordErrors("Password must not be empty");
            passwordInputStyles.push(styleClasses.Invalid);

            conditions.passwordIsValid = false;
        }
        if (conditions.emailIsValid && conditions.passwordIsValid) {
            loginRequest({
                email: email,
                password: password
            });
        }

        setSubmitted(false);

    }

    const inputChangeHandler = (event, type) => {

        setEmailInputStyles([styleClasses.InputElement]);
        setPasswordInputStyles([styleClasses.InputElement]);
        setEmailErrors('');
        setPasswordErrors('');

        if (type === "email") {
            setEmail(event.target.value);
        } else if (type === "pass") {
            setPassword(event.target.value)
        }

    }

    return (
        <form className={styleClasses.Input} onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);

        }}>
            <input className={emailInputStyles.join(' ')} type="text" placeholder="Enter email"
                   onChange={(event) => (inputChangeHandler(event, "email"))}/>
            <p>{emailErrors}</p>
            <input className={passwordInputStyles.join(' ')} type="text" placeholder="Enter password"
                   onChange={(event) => (inputChangeHandler(event, "pass"))}/>
            <p>{passwordErrors}</p>
            <button type="submit">Submit</button>

        </form>
    )

}
export default SignInForm;

