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

export const signUpRequest = (props) => {
    const personalData = {
        name: props.personalData.name.value,
        surname: props.personalData.surname.value,
        email: props.personalData.email.value,
        age: props.personalData.age.value,
        gender: props.gender.value
    }

    const result = {
        status: '',
        text: ''
    }

    axios.post("http://localhost:8080/signup", personalData)
        .then((response) => {
            console.log(response.status);
            console.log(response.data);
            result.status = response.status;
            result.text = response.data;

        })
        .catch(err => {
            if (err.response) {
                console.log(err.response.status)
                console.log(err.response.data)
                result.status = err.response.status;
                result.text = err.response.data;
            }
        })

    return result;

}
