import React from 'react';
import styleClasses from './AccommodationWrapper.module.css';
import DatePicker from 'react-date-picker';

const Accommodation = () => {

    return(

        <div className={styleClasses.AccommodationWrapper}>
            <div className={styleClasses.ImageWrapper}>
                <img src={"https://gulfbusiness.com/wp-content/uploads/img-world-of-adventures-17.jpg"} ></img>
            </div>
            <div className={styleClasses.DetailsWrapper}>
                <div className={styleClasses.DescriptionWrapper}>
                    <div className={styleClasses.DescriptionTitle}>
                        <h3>Title</h3>
                    </div>
                    <span>Cum vox congregabo, omnes adgiuffffffffffffffmes tractare gratis, primus clabularees.</span>
                </div>
                <div className={styleClasses.NavWithPriceWrapper}>
                    <div className={'DateTimePicker'}>
                        <DatePicker value={new Date()} />
                        <DatePicker />
                    </div>
                    <div className={'Button'}>
                        <button>Check availability</button>
                    </div>
                    <div className={'PriceWrapper'}>
                        <p>1234$</p>
                    </div>

                </div>
            </div>


        </div>


    )
}

export default Accommodation;