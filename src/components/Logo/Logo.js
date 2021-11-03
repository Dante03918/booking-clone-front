import React from 'react';
import { withRouter } from 'react-router-dom';
import styleClasses from './Logo.module.css';
import Image from '../../logo.svg'


const Logo = (props) => {


    return (
        <div className={styleClasses.Logo} onClick={() => { props.history.push('/') }}>
            <img src={Image} alt="Obrazek"/>
        </div>
    )
}
export default withRouter(Logo);