import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import axios from "axios";
import styleClasses from './AddAccommodation.module.css'

const AddAccommodation = () => {

    const [files, setFiles] = useState('');
    const [fileURL, setFileURL] = useState('');
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');


    const fileChangeHandler = (event) => {
        event.preventDefault();
        setFiles( event.target.files[0]);
        setFileURL( URL.createObjectURL(event.target.files[0]));
    }

    const descriptionChangeHandler = (event) => {
        event.preventDefault()
        setDescription(event.target.value)
    }

    const titleChangeHandler = (event) => {
        event.preventDefault()
        setTitle(event.target.value)
    }

    const priceChangeHandler = (event) => {
        event.preventDefault()
        setPrice(event.target.value)
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

                const details = {
                    imageUrl: data.url,
                    description: description,
                    title: title,
                    price: price
                }

                axios.post("http://localhost:8080/addAccommodation",
                    details,
                    {headers: {Authorization: localStorage.getItem('user')}})
                    .then(response => console.log(response))
            })
            .catch(err => console.log(err))

    }

    let view = <div>
        <form onSubmit={addAccommodation} className={styleClasses.addAccommodationWrapper}>
            <input type="file" placeholder="Select image" onChange={fileChangeHandler}/>
            <div className={styleClasses.ImageWrapper}>
                {
                    files ? <img src={fileURL}></img> : null
                }
            </div>
            <input type="text" placeholder="Title" onChange={titleChangeHandler}/>
            <textarea type="text" placeholder="Description" onChange={descriptionChangeHandler}/>
            <input type="text" placeholder="Price" onChange={priceChangeHandler}/>

            <button type="submit">Dodaj</button>
        </form>
    </div>;

    if (!localStorage.getItem("user")) {
        view = <Redirect to="/login"/>
    }

    return (
        <div>
            {view}
        </div>

    )


}
export default AddAccommodation;