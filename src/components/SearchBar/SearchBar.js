import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Fragment from 'react-router-dom';

const SearchBar = () => (
    <Fragment>
        <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
    </Fragment>

)
export default SearchBar;