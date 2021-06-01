import React, {useState} from 'react';
import {Image} from 'cloudinary-react';
import axios from "axios";

const AddAccommodation = () => {

    const [files, setFiles] = useState('');


    const fileChangeHandler = (event) => {
        event.preventDefault();
        setFiles(event.target.files[0]);
    }

    const addAccommodation = (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("file", files);
        formData.append("upload_preset", "unsigned");
        formData.append("cloud_name", "dantecloudinary");

        fetch("https://api.cloudinary.com/v1_1/dantecloudinary/image/upload", {
            method: "post",
            body: formData
        })
            .then(resp => resp.json())
            .then(data => {
                // TO DO add post to backend endpoint
            })
            .catch(err => console.log(err))

    }

    return (
        <div>
            <form onSubmit={addAccommodation}>
                <input type="file" placeholder="Select image" onChange={fileChangeHandler}/>
                <input type="text" placeholder="Description"/>
                <input type="text" placeholder="Title"/>
                <input type="text" placeholder="Price"/>

                <button type="submit">Dodaj</button>
            </form>
        </div>

    )


}
export default AddAccommodation;