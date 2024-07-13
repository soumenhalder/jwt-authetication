import React from 'react';
import './Header_down.css';

const Header_down = () => {
    return (
        <nav className="header-down">
            <div classname="headerButtonDiv">
            <button className="header-down-buttons"> HOME</button>
            <button className="header-down-buttons"> FIND TOPPERS</button>
            <button className="header-down-buttons">JOIN AS A TOPPER</button>
            <button className="header-down-buttons">TIPS &amp; TRICKS</button>
            <button className="header-down-buttons">CONTACT US</button>
            </div>
        </nav>
    );
};

export default Header_down;
