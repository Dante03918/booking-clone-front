import './App.css';
import { useState } from "react";
import { Route } from 'react-router-dom';
import BookingClone from './containers/BookingClone/BookingClone';
import SignInForm from "./containers/Authorization/SingIn/SignInForm";
import SignUpForm from "./containers/Authorization/SignUp/SignUpForm";
import LogOut from './components/LogOut';
import Accommodation from "./containers/Accommodation/Accommodation";
import AddAccommodation from "./containers/Accommodation/AddAccommodation";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

   const [loggedUser, setLoggedUser] = useState(false);
    const [accommDetails, setAccommDeatils] = useState([]);

  return (
    <BookingClone loggedUser={loggedUser}
                  setUser = {setLoggedUser}
                  accommDetails={accommDetails}
                  setAccommDetails={setAccommDeatils}>
        <Route path={"/"} exact> <Accommodation accommDetails={accommDetails} setAccommDetails={setAccommDeatils}/></Route>
        <Route path={"/signup"} component={SignUpForm}/>
        <Route path={"/login"} ><SignInForm setUser = {setLoggedUser} /></Route>
        <Route path={"/logout"}><LogOut setUser = {setLoggedUser}/></Route>
        <Route path={"/add"} component={AddAccommodation}/>
    </BookingClone>
  );
}

export default App;
