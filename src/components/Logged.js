import React, {useState} from "react";
import styleClasses from './Logged.module.css';
import axios from 'axios';

const Logged = () => {

    const [message, setMessage] = useState('');

    const checkTokenValidity = (event) => {
        event.preventDefault();
        axios.get("http://localhost:8080/token", {headers: {Authorization: localStorage.getItem('user')}})
            .then( (response) => {setMessage(response.data)})
            .catch()


    }

        return(
            <div className={styleClasses.Logged}>
                <p>ZALOGOWANO!!!</p>
                <form onSubmit={checkTokenValidity}>
                    <button type='submit'>Valid Token</button>
                </form>
                <p>{message}</p>
            </div>
        )

}
export default Logged;