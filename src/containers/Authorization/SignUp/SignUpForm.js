import React, {useEffect, useState} from 'react';
import styleClasses from '../FormStyle.module.css';
import Input from '../../../components/UI/Input/Input';
import {checkValidity} from "../../../utils/Validation/SignUpFormValidation/SignUpFormValidation";
import {signUpRequest} from "../../../Api";

const SignUpForm = () => {

    const [formFields, setFormFields] = useState({
        name: {
            placeHolder: 'Your name',
            value: '',
            isValid: true,
            error: ''
        },
        surname: {
            placeHolder: 'Your surname',
            value: '',
            isValid: true,
            error: ''
        },
        email: {
            placeHolder: 'Your email',
            value: '',
            isValid: true,
            error: ''
        },
        password: {
            placeHolder: 'Your password',
            value: '',
            isValid: true,
            error: ''
        },
        age: {
            placeHolder: 'Your age',
            value: '',
            isValid: true,
            error: ''
        },

    });
    const [gender, setGender] = useState('');
    const [formError, setFormError] = useState({hasError: false, errorText: '', errorStatus: ''});
    const [formIsValid, setFormIsValid] = useState(false);
    const [submitted, setSubmitted] = useState(false);


    useEffect(() => {
      if(submitted){

          signUpFormSubmit()
                .then((response) => {
              setFormError({...formError, hasError: false,  errorText: response.data, errorStatus: response.status});

                }).catch((error) => {
                setFormError({...formError, hasError: true, errorText:  error.response.data, errorStatus: error.response.status});
                  console.log(error.response.data)
              });
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

        let formIsValid = true;

        for(let type in formElements){
            formIsValid = formElements[type].isValid && formIsValid;
        }

        setFormIsValid(formIsValid);
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
        <div className={styleClasses.SignUpWrapper}>
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
                <div className={styleClasses.RadioButtons}>
                    <input type='radio' id='man' value='man' name='gender' onChange={radioButtonChangeHandler}/>
                    <label htmlFor='man'>Man</label>
                    <input type='radio' id='woman' value='woman' name='gender' onChange={radioButtonChangeHandler}/>
                    <label htmlFor='woman'>Woman</label>
                </div>


                <button className={styleClasses.Button} type='submit' disabled={!formIsValid}>Submit</button>

                <p className={styleClasses.CallbackMsg}>{formError.errorText}</p>

            </form>
        </div>

    )
}
export default SignUpForm;