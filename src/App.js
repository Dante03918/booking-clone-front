import './App.css';
import {Route} from 'react-router-dom';
import BookingClone from './containers/BookingClone/BookingClone';
import SignInForm from "./containers/Authorization/SingIn/SignInForm";
import Logged from "./components/Logged";
import SignUpForm from "./containers/Authorization/SignUp/SignUpForm";
import LoggedOut from './components/LoggedOut';
import Accommodation from "./containers/Accommodation/Accommodation";
import AddAccommodation from "./containers/Accommodation/AddAccommodation";

function App() {
  return (
    <BookingClone >
        <Route path={"/"} exact component={Accommodation}/>
        <Route path={"/signup"} component={SignUpForm}/>
        <Route path={"/login"} component={SignInForm}/>
        <Route path={"/logged"} component={Logged}/>
        <Route path={"/logout"} component={LoggedOut}/>
        <Route path={"/add"} component={AddAccommodation}/>
    </BookingClone>
  );
}

export default App;
