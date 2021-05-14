import './App.css';
import {Route} from 'react-router-dom';
import BookingClone from './containers/BookingClone/BookingClone';
import SignInForm from "./containers/Authorization/SingIn/SignInForm";
import Logged from "./components/Logged";
import SignUpForm from "./containers/Authorization/SignUp/SignUpForm";
import LoggedOut from './components/LoggedOut';

function App() {
  return (
    <BookingClone >
        <Route path={"/"} component={BookingClone}/>
        <Route path={"/signup"} component={SignUpForm}/>
        <Route path={"/login"} component={SignInForm}/>
        <Route path={"/logged"} component={Logged}/>
        <Route path={"/loggedout"} component={LoggedOut}/>
    </BookingClone>
  );
}

export default App;
