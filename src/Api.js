import axios from 'axios';
export const loginRequest = (props) => {

    const credentials ={
        email: props.email,
        password: props.password
    }
    console.log(props.email + "----" + props.password)
    axios.post("http://localhost:8080/login", credentials)
}
