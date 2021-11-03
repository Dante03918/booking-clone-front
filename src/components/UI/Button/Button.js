import React from 'react';
import styleClasses from './Button.module.css';

const Button = (props) => {

    return(
        <button onClick={props.clicked} className={styleClasses.Button}>
            {props.children}
        </button>
    )
}
export default Button;
