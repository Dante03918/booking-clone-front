import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import axios from "axios";
import styleClasses from './AddAccommodation.module.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Control onChange={fileChangeHandler} type="file" />
            </Form.Group>
            <div className={styleClasses.ImageWrapper}>
                {
                    files ? <img src={fileURL}></img> : null
                }
            </div>
            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Control onChange={titleChangeHandler} placeholder="Title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control onChange={descriptionChangeHandler} as="textarea" rows={3} placeholder="Description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Control onChange={priceChangeHandler} placeholder="Price" />
            </Form.Group>
            <Button type='submit' variant="primary">Dodaj</Button>
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