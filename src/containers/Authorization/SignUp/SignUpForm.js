import React, {useEffect, useState} from 'react';
import styleClasses from '../FormStyle.module.css';
import Input from '../../../components/UI/Input/Input';
import {checkValidity} from "../../../utils/Validation/SignUpFormValidation/SignUpFormValidation";
import {signUpRequest} from "../../../Api";
import axios from "axios";

const SignUpForm = () => {

    const [formFields, setFormFields] = useState({
        name: {
            placeHolder: 'Your name',
            value: '',
            isValid: false,
            error: ''
        },
        surname: {
            placeHolder: 'Your surname',
            value: '',
            isValid: false,
            error: ''
        },
        email: {
            placeHolder: 'Your email',
            value: '',
            isValid: false,
            error: ''
        },
        age: {
            placeHolder: 'Your age',
            value: '',
            isValid: false,
            error: ''
        },

    });
    const [gender, setGender] = useState('');
    const [formError, setFormError] = useState({hasError: false, errorText: '', errorStatus: ''});
    const [submitted, setSubmitted] = useState(false);


    useEffect(() => {
      if(submitted){

          const result = signUpFormSubmit()
                .then(() => {

              setFormError({...formError, errorStatus: result.status, errorText: "User created"});

              console.log(result)
            }).catch(err => setFormError({...formError, hasError: true, errorText: "User already exist"}));
        }

        setSubmitted(false);

    }, [submitted])

    const inputChangeHandler = (event, type) => {

        const formElements = {...formFields};
        const formElement = {...formElements[type]}

        formElement.value = event.target.value;

        const returnedObject = checkValidity(formElement.value, type);

        formElement.isValid = returnedObject.isValid;

        if (returnedObject.isValid) {
            formElement.error = '';
        } else {
            formElement.error = returnedObject.error;
        }

        setFormFields({...formFields, [type]: formElement});

    }

    const radioButtonChangeHandler = (event) => {
        setGender(event.target.value);
    }

    const signUpFormSubmit = () => {
        return (
            signUpRequest({
                personalData: formFields,
                gender: gender
            })
        )
    }
    const formElementsArray = [];

    for (let key in formFields) {
        formElementsArray.push({
            id: key,
            config: formFields[key]
        })
    }


    return (
        <form className={styleClasses.Input} onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
            setFormError({...formError, hasError: null, errorText: ''})
        }
        }>

            {formElementsArray.map(formElement => {
                    return (
                        <div key={formElement.id}>
                            <Input
                                placeHolder={formElement.config.placeHolder}
                                value={formElement.config.value}
                                changed={(event) => {
                                    inputChangeHandler(event, formElement.id)
                                }}
                                isValid={formElement.config.isValid}/>
                            <p>{formElement.config.error}</p>
                        </div>
                    )
                }
            )}
            <input type='radio' id='man' value='man' name='gender' onChange={radioButtonChangeHandler}/>
            <label htmlFor='man'>Man</label>
            <input type='radio' id='woman' value='woman' name='gender' onChange={radioButtonChangeHandler}/>
            <label htmlFor='woman'>Woman</label>

            <button type='submit'>Submit</button>

            {formError.errorText}

        </form>
    )
}
export default SignUpForm;