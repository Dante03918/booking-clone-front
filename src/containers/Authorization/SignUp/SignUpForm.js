import React, {useState} from 'react';
import styleClasses from '../FormStyle.module.css';
import Input from '../../../components/UI/Input/Input';
import { checkValidity } from "../../../utils/Validation/SignUpFormValidation/SignUpFormValidation";
import { signUpRequest } from "../../../Api";

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




    const inputChangeHandler = (event, type) => {

        const formElements = {...formFields};
        const formElement = {...formElements[type]}

        formElement.value = event.target.value;

        const returnedObject = checkValidity(formElement.value, type);

        formElement.isValid = returnedObject.isValid;

        if(returnedObject.isValid){
            formElement.error = '';
        } else {
            formElement.error = returnedObject.error;
        }

        setFormFields({...formFields, [type] : formElement});

    }

    const radioButtonChangeHandler = (event) => {
        setGender(event.target.value);
    }

   const signUpFormSubmit = (event) => {
        event.preventDefault();
        const requestResult = signUpRequest({
            personalData: formFields,
            gender: gender
        })
   }
    const formElementsArray = [];

    for (let key in formFields) {
        formElementsArray.push({
            id: key,
            config: formFields[key]
        })
    }

    return (
        <form className={styleClasses.Input} onSubmit={signUpFormSubmit}>

            {formElementsArray.map(formElement => {
                return(
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
        </form>
    )
}
export default SignUpForm;