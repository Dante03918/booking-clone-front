import React, {useState} from 'react';
import Input from '../../../components/UI/Input/Input';

const SignUpForm = () => {

    const [isValid, setIsValid] = useState({
        nameIsValid: true,
        surnameIsValid: true,
        ageIsValid: true,
        genderIsValid: true
    });

    const NameInputChangeHandler = (event) => {
        if (event.target.value.length < 2) {
            setIsValid({...isValid, nameIsValid: false})
        } else {
            setIsValid({...isValid, nameIsValid: true})
        }
    }
    return (
        <form>
            <Input valid={isValid}
                   label={"Name"}
                   changed={(event) => {
                       NameInputChangeHandler(event)
                   }}/>
            <Input valid={isValid}
                   label={"Surname"}
                   changed={(event) => {
                      // SurnameInputChangeHandler(event)
                   }}/>
            <Input valid={isValid}
                   label={"Age"}
                   changed={(event) => {
                       //AgeInputChangeHandler(event)
                   }}/>

                <input type='radio' id='man' value='man' name='gender' checked/>
                <label htmlFor='man'>Man</label>
                <input type='radio' id='woman' value='woamn' name='gender'/>
                <label htmlFor='woman'>Woman</label>


        </form>
    )
}
export default SignUpForm;