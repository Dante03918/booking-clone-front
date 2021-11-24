import React, {useEffect, useState} from "react";
import FormControl from 'react-bootstrap/FormControl';
import Button from '../UI/Button/Button';
import styleClasses from './SearchBar.module.css';
import {withRouter} from 'react-router-dom';

function SearchBar(props) {

    const [keyword, setKeyword] = useState();

    const searchFunction = () => {

        const items = props.accommDetails.map(item => ({
            ...item, accommodations: item.accommodations
                .filter(accommodation => accommodation.description === keyword)
        }))

        props.setAccommDetails(items);

    }

    const inputChangeHandler = (event) => {

        setKeyword(event.target.value)

    }

    return (
        <div className={styleClasses.SearchBar}>
            <FormControl
                style={{width: 250}}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(event) => (inputChangeHandler(event))}
            />
            <Button clicked={() => {
                searchFunction()
            }}>Search</Button>
        </div>
    )

}
export default withRouter(SearchBar);