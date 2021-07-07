import axios from 'axios';




export const loginRequest = (props) => {

    const credentials = {
        email: props.email,
        password: props.password
    }
    console.log(props.email + "----" + props.password)
    axios.post("http://localhost:8080/login", credentials)

        .then(response => {
            window.location.href = "/logged";
            localStorage.setItem('user', 'Bearer ' + response.data)
        })

        .catch(error => console.log(error.response.status))

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

    return await axios.post("http://localhost:8080/signup", personalData)
}


    export const deleteRequest = (email, id) => {

        axios.delete('http://localhost:8080/removeAccommodation?email=' + email + "&id=" + id)
            .then(response => {
                console.log(response.data);
            })
    }


