import React from 'react';
import styleClasses from '../../../containers/Authorization/FormStyle.module.css';

const input = (props) => {

const classes = [styleClasses.InputElement];

    if(!props.isValid){
        classes.push(styleClasses.Invalid)
    }
    return(
        <div>
            <input className={classes.join(' ')}
                   placeholder={props.placeHolder}
                   value={props.value}
                   onChange={props.changed}/>
        </div>
    )
}
export default input;