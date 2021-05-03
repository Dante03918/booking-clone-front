import React from 'react';
import styleClasses from './Input.module.css';

const input = (props) => {
    const inputStyle = [styleClasses.InputElement];

    if(props.valid.nameIsValid === false){
        inputStyle.push(styleClasses.Invalid);
    }
    return(
        <div className={styleClasses.Input}>
            <input className={inputStyle.join(' ')}
                   placeholder={props.label}
                   onChange={props.changed}/>
        </div>
    )
}
export default input;