import React, { useState } from 'react';
import './Header.css';
import { CgMenu } from 'react-icons/cg';
import {MdAccountCircle} from 'react-icons/md';

function Header() {
    const [active, setActive] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState("nav__toggle");
    const navToggle = () => {
        active === 'nav__menu' 
            ? setActive('nav__menu nav__active') 
            : setActive('nav__menu');
        //TogglerIcon 
        toggleIcon === 'nav__toggler' 
        ? setToggleIcon('nav__toggler toggle')
        : setToggleIcon("nav__toggler");
    };
    return (
        <nav className="nav">
            <div className="logo">
                <a href="/">
                    <img src="./logo-cor.png"></img>
                </a>
            </div>
            <ul className={active}>
                <li className="nav__item"><a href="/LandingPage" className="nav__link">Home</a></li>
                <li className="nav__item"><a href="/Labinput" className="nav__link">Test</a></li>
                <li className="nav__item"><a href="#" className="nav__link">About</a></li>
                <li className="nav__item"><a href="/login" className="nav__link"> <MdAccountCircle /> Login</a></li>
            </ul>
            <div onMouseDown= {navToggle} className={toggleIcon}>
                <div className="line1-header"><CgMenu /></div>
                <div className="line2-header"></div>
                <div className="line3-header"></div>
            </div>
            <hr></hr>
        </nav>
    );
}

export default Header;