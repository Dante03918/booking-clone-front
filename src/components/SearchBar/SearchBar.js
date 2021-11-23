import React, {useEffect} from "react";
import FormControl from 'react-bootstrap/FormControl';
import Button from '../UI/Button/Button';
import styleClasses from './SearchBar.module.css';
import {searchRequest} from "../../Api";

function SearchBar(props)  {

    const inputChangeHandler = (event) => {

       //  searchRequest({keyword: event.target.value})
       //      .then((response) =>)
       // console.log() ;
    }
    return(
       <div className={styleClasses.SearchBar}>
            <FormControl
                style={{width: 250}}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(event) => (inputChangeHandler(event))}
            />
            <Button>Search</Button>
        </div>
    )

}
export default SearchBar;