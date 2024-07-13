import React from 'react';
import './Header.css';
import Header_up from './Header_up';
import Header_down from './Header_down';

function Header() {
    return (
        <div className="Header">
            <Header_up/>  
            <Header_down/>  
        </div>
    );
}
export default Header;
