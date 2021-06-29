import React, {useState, useEffect} from 'react';
import styleClasses from './AccommodationWrapper.module.css';
import DatePicker from 'react-date-picker';
import axios from 'axios';

const Accommodation = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [accommDetails, setAccommDeatils] = useState([])


    useEffect(() => {
        getDataFromApi();
    }, [])


    const getDataFromApi = () => {
        axios.get('http://localhost:8080/')

            .then(response => {
                let items = [];
                for (let key in response.data) {
                    items.push(response.data[key])

                }
                setAccommDeatils(items);
                console.log(Object.entries(response.data));
            })


    }


    let hotelList = <div>
        {accommDetails.map((accommodation, i) => (
            <div key={accommodation.id}>
                {accommodation.accommodations.map(innerItem => (
                <div key={accommodation.name}>
                    <div className={styleClasses.AccommodationWrapper}>
                        <div className={styleClasses.ImageWrapper}>
                            <img src={innerItem.imageUrl} alt="Obrazek"></img>
                        </div>
                        <div className={styleClasses.DetailsWrapper}>
                            <div className={styleClasses.DescriptionWrapper}>
                                <div className={styleClasses.DescriptionTitle}>
                                    <h3>{innerItem.title}</h3>
                                </div>
                                <span>{innerItem.description}</span>
                            </div>
                            <div className={styleClasses.NavWithPriceWrapper}>
                                <div className={'DateTimePicker'}>
                                    <DatePicker value={startDate} onChange={setStartDate}/>
                                    <DatePicker value={endDate} onChange={setEndDate}/>

                                </div>
                                <div className={'Button'}>
                                    <button>Check availability</button>
                                </div>
                                <div className={'PriceWrapper'}>
                                    <p>{innerItem.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        ))}
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