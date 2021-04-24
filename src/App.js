import './App.css';
import {Route} from 'react-router-dom';
import BookingClone from './containers/BookingClone/BookingClone';
import SignInForm from "./containers/Authorization/SingIn/SignInForm";
function App() {
  return (
    <BookingClone>
        <Route path={"/"} component={BookingClone}/>
        <Route path={"/login"} component={SignInForm}/>
    </BookingClone>

  );
}

export default App;
