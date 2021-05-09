import axios from 'axios';

export const loginRequest = (props) => {


    const credentials = {
        email: props.email,
        password: props.password
    }
    console.log(props.email + "----" + props.password)
    axios.post("http://localhost:8080/login", credentials)
        .then(response => window.location.href = "/logged")
        .catch(error => alert("Coś nie pykło"))

}

export const signUpRequest = async (props) => {


    const personalData = {
        name: props.personalData.name.value,
        surname: props.personalData.surname.value,
        email: props.personalData.email.value,
        age: props.personalData.age.value,
        password: props.personalData.password.value,
        gender: props.gender.value
    }

 return  await axios.post("http://localhost:8080/signup", personalData)

}
