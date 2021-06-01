import React, {useState, useEffect} from 'react';
import styleClasses from './AccommodationWrapper.module.css';
import DatePicker from 'react-date-picker';
import axios from 'axios';

const Accommodation = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [accommDetails, setAccommDeatils] = useState([])


    useEffect(() => {
        getDummyDataFromFirebase();
    }, [])


    const getDummyDataFromFirebase = () => {
        axios.get('https://bookingclone-de580-default-rtdb.europe-west1.firebasedatabase.app/details.json')
            .then(response => {

                const fetchedData = [];
                for (let key in response.data) {
                    fetchedData.push(response.data[key])
                }

                setAccommDeatils(fetchedData);
                console.log(response.data)
            })


    }
    let hotelList = <div>
        {accommDetails.map(accommodation => (
            <div key={accommodation.id} className={styleClasses.AccommodationWrapper}>
                <div className={styleClasses.ImageWrapper}>
                    <img src={accommodation.imgPath} alt="Obrazek"></img>
                </div>
                <div className={styleClasses.DetailsWrapper}>
                    <div className={styleClasses.DescriptionWrapper}>
                        <div className={styleClasses.DescriptionTitle}>
                            <h3>{accommodation.title}</h3>
                        </div>
                        <span>{accommodation.description}</span>
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
                            <p>{accommodation.price}</p>
                        </div>
                    </div>
                </div>
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