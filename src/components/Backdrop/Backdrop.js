import react from 'react';
import styleClasses from './Backdrop.module.css';

const Backdrop = (props) => (
    props.show ? <div className={styleClasses.Backdrop} onClick={props.hideBackdrop}></div> : null
)
export default Backdrop;