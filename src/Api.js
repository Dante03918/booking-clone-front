import axios from 'axios';

export const loginRequest = (props) => {


    const credentials = {
        user: props.email,
        password: props.password
    }
    console.log(props.email + "----" + props.password)
    axios.post("http://localhost:8080/login", credentials)
        .then(response => window.location.href = "/logged")
        .catch(error => alert("Coś nie pykło"))

}
