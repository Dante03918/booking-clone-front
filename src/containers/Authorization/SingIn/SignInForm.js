import React, {useEffect, useState, useRef} from 'react';
import SignInFormStyles from './SignInFormStyles.module.css';
import {loginRequest} from '../../../Api';
import { withRouter } from 'react-router-dom';

const SignInForm = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("null");
    const [submitted, setSubmitted] = useState(false);
    const [emailInputStyles, setEmailInputStyles] = useState([SignInFormStyles.InputElement]);
    const [passwordInputStyles, setPasswordInputStyles] = useState([SignInFormStyles.InputElement]);
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
            emailInputStyles.push(SignInFormStyles.Invalid);

            conditions.emailIsValid = false;

        }
        if (email.length === 0) {
            setEmailErrors("Email is required");
            emailInputStyles.push(SignInFormStyles.Invalid);

            conditions.emailIsValid = false;

        }

        if (!passPattern.test(password)) {
            setPasswordErrors("Password is too short");
            passwordInputStyles.push(SignInFormStyles.Invalid);

            conditions.passwordIsValid = false;
        }
        if (password.length === 0) {
            setPasswordErrors("Password must not be empty");
            passwordInputStyles.push(SignInFormStyles.Invalid);

            conditions.passwordIsValid = false;
        }
        if (conditions.emailIsValid && conditions.passwordIsValid) {
           loginRequest({
                email: email,
                password: password
            });
           if(localStorage.getItem('user')){
               props.setUser(email);
               props.history.push('/');
           }

        }

        setSubmitted(false);

    }

    const inputChangeHandler = (event, type) => {

        setEmailInputStyles([SignInFormStyles.InputElement]);
        setPasswordInputStyles([SignInFormStyles.InputElement]);
        setEmailErrors('');
        setPasswordErrors('');

        if (type === "email") {
            setEmail(event.target.value);
        } else if (type === "pass") {
            setPassword(event.target.value)
        }

    }

    return (
        <div className={SignInFormStyles.Wrapper}>
            <form className={SignInFormStyles.Input} onSubmit={(event) => {
                props.setUser(true);
                event.preventDefault();
                setSubmitted(true);

            }}>
                <div className={SignInFormStyles.Inputs}>
                    <input className={emailInputStyles.join(' ')} type="text" placeholder="Enter email"
                           onChange={(event) => (inputChangeHandler(event, "email"))}/>
                    <p>{emailErrors}</p>
                    <input className={passwordInputStyles.join(' ')} type="text" placeholder="Enter password"
                           onChange={(event) => (inputChangeHandler(event, "pass"))}/>
                    <p>{passwordErrors}</p>
                </div>

                <button className={SignInFormStyles.Button} type="submit">Submit</button>

            </form>
        </div>

    )

}
export default withRouter(SignInForm);

