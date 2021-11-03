import { slide as Menu } from 'react-burger-menu';
import Button from "../../UI/Button/Button";
import { withRouter } from 'react-router-dom';
import styleClasses from './HamburgerMenu.module.css';
import React, {useState} from "react";

const HamburgerMenu = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    var styles = {
        bmBurgerButton: {
            position: 'fixed',
            width: '36px',
            height: '30px',
            left: '25px',
            top: '25px'
        },
        bmBurgerBars: {
            background: '#000000'
        },
        bmBurgerBarsHover: {
            background: '#a90000'
        },
        bmCrossButton: {
            height: '24px',
            width: '24px'
        },
        bmCross: {
            background: '#bdc3c7'
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '100%'
        },
        bmMenu: {
            background: '#373a47',
            padding: '2.5em 1.5em 0',
            fontSize: '1.15em'
        },
        bmMorphShape: {
            fill: '#373a47'
        },
        bmItemList: {
            color: '#b8b7ad',
            padding: '0.8em'
        },
        bmItem: {
            display: 'inline-block'
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)'
        }
    }

    const hideMenu = () => {
        setIsOpen(false);
    }
    const handleStateChange = (state) => {
        setIsOpen(state.isOpen)
    }
    return(
        <div>
            <Menu  onStateChange={(state) => {handleStateChange(state)}} isOpen={isOpen} styles={ styles } right>
                <div onClick={() => hideMenu()} className={styleClasses.HamElement}><Button clicked={()=>{props.history.push("/login")}}>Sign In</Button></div>
                <div onClick={() => hideMenu()} className={styleClasses.HamElement}><Button clicked={() => {props.history.push("/signup")}} >Sign Up </Button></div>
                <div onClick={() => hideMenu()} className={styleClasses.HamElement}>{props.loggedUser ? <Button clicked={()=>{props.history.push("/logout")}}>Log Out</Button> : null}</div>
                <div onClick={() => hideMenu()} className={styleClasses.HamElement}>{props.loggedUser ? <Button clicked={()=>{props.history.push("/add")}} >Add ad</Button> : null}</div>
                <div>{props.loggedUser ? <p>Zalogowany użytkownik: {props.loggedUser}</p> : null}</div>
            </Menu>
        </div>

    )
}
export default withRouter(HamburgerMenu);