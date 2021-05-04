import React, {useState} from 'react';
import styleClasses from '../FormStyle.module.css';
import Input from '../../../components/UI/Input/Input';
import { checkValidity } from "../../../utils/Validation/SignUpFormValidation/SignUpFormValidation";

const SignUpForm = () => {

    const [formFields, setFormFields] = useState({
        name: {
            placeHolder: 'Your name',
            value: '',
            isValid: false
        },
        surname: {
            placeHolder: 'Your surname',
            value: '',
            isValid: false
        },
        email: {
            placeHolder: 'Your email',
            value: '',
            isValid: false
        },
        age: {
            placeHolder: 'Your age',
            value: '',
            isValid: false
        },

    });
    const [gender, setGender] = useState('');



    const inputChangeHandler = (event, type) => {

        const formElements = {...formFields};
        const formElement = {...formElements[type]}

        formElement.value = event.target.value;
        formElement.isValid = checkValidity(formElement.value, type)
        setFormFields({...formFields, [type] : formElement});

    }

    const radioButtonChangeHandler = (event) => {
        setGender(event.target.value);
        console.log(gender);
    }
    const formElementsArray = [];

    for (let key in formFields) {
        formElementsArray.push({
            id: key,
            config: formFields[key]
        })
    }

    return (
        <form className={styleClasses.Input}>

            {formElementsArray.map(formElement => (
                    <Input key={formElement.id}
                           placeHolder={formElement.config.placeHolder}
                           value={formElement.config.value}
                           changed={(event) => {
                               inputChangeHandler(event, formElement.id)
                           }}
                           isValid={formElement.config.isValid}/>
                )
            )}


                <input type='radio' id='man' value='man' name='gender' onChange={radioButtonChangeHandler}/>
                <label htmlFor='man'>Man</label>
                <input type='radio' id='woman' value='woman' name='gender' onChange={radioButtonChangeHandler}/>
                <label htmlFor='woman'>Woman</label>




        </form>
    )
}
export default SignUpForm;