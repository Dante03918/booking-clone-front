import './App.css';
import {Route} from 'react-router-dom';
import BookingClone from './containers/BookingClone/BookingClone';
function App() {
  return (
    <div >
        <Route path={"/"} component={BookingClone}/>
    </div>
  );
}

export default App;
