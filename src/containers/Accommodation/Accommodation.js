import React, {useState, useEffect} from 'react';
import styleClasses from './AccommodationWrapper.module.css';
import DatePicker from 'react-date-picker';
import axios from 'axios';
import Button from "react-bootstrap/Button";
import VerticallyCenteredModal from "../../components/Modal";

const Accommodation = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [showBackdrop, setShowBackdrop] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const [accommDetails, setAccommDeatils] = useState([]);

    useEffect(() => {
        getDataFromApi();
    }, [])

    const getDataFromApi = () => {
        axios.get('http://localhost:8080/')

            .then(response => {
                let items = [];
                for (let key in response.data) {
                    items.push(response.data[key])
                    console.log(response.data[key])
                }
                setAccommDeatils(items);
                console.log(Object.entries(response.data));
            })
    }

    const deleteHandler = (email, id) => {

        axios.delete('http://localhost:8080/removeAccommodation?email=' + email + "&id=" + id)
            .then(response => {
                    console.log(response);
                    const items = accommDetails.map(item => ({
                        ...item, accommodations: item.accommodations
                            .filter((acc) => acc.id !== id)
                    }))
                    setAccommDeatils(items)
                }
            )
    }

    const bookHandler = (accommodationId) => {

        const data = {
            startDate: startDate,
            endDate: endDate,
            accommodationId: accommodationId
        }
        axios.post("http://localhost:8080/book", data).then(response => {

            console.log(response)
            setResponseMessage(response.data);
            setShowBackdrop(true);
        })


    }

    const hideBackdrop = () => {
        setShowBackdrop(false);
    }

    let loggedUser = localStorage.getItem('user');

    let hotelList = <div>
        {accommDetails.map((accommodation, i) => (
            <div key={accommodation.id}>
                {accommodation.accommodations.map(innerItem => (
                    <div key={accommodation.name}>
                        <div className={styleClasses.AccommodationWrapper}>

                            <div className={styleClasses.DescriptionTitle}>
                                <h3>{innerItem.title}</h3>
                                {loggedUser ? <div className={styleClasses.EditingButtons}>

                                    <div className={styleClasses.DeleteButton}><a
                                        onClick={() => deleteHandler(accommodation.email, innerItem.id)}>Delete</a>
                                    </div>

                                </div> : null}
                            </div>

                            <div className={styleClasses.ImageWrapper}>
                                <img src={innerItem.imageUrl} alt="Obrazek"></img>
                            </div>
                            <div className={styleClasses.DetailsWrapper}>

                                <div className={styleClasses.DescriptionWrapper}>

                                    <span>{innerItem.description}</span>

                                </div>
                                <div className={styleClasses.NavWrapper}>
                                    <div className={'DateTimePicker'}>
                                        <DatePicker value={startDate} onChange={setStartDate}/>
                                        <DatePicker value={endDate} onChange={setEndDate}/>

                                    </div>
                                    <div className={'Button'}>
                                        <Button onClick={() => bookHandler(innerItem.id)} variant="primary">Book</Button>
                                    </div>


                                </div>
                                <div className={styleClasses.PriceWrapper}>
                                    <h3>{innerItem.price}zł</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        ))}

        <VerticallyCenteredModal show={showBackdrop} onHide={()=>hideBackdrop()} message={responseMessage}/>

    </div>

    if (!accommDetails) {
        hotelList = <p>Loading...</p>
    }

    return (
        <div>
            {hotelList}
        </div>
    )
}

export default Accommodation;