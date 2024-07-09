import React from 'react';
import ImageButtonList from './ImageButtonList'; // Assuming ImageButtonList is imported from a separate file
import './Header_up.css'; // Import your CSS file for styling

const Header_up = () => {
    return (
        <nav className="header">
            <div className='logo'>
                <img src='/images/topperlog.png' alt='logo'/>
            </div>
            <div className="header-buttons">
                <ImageButtonList />
                <div className="auth-buttons">
                    <button className='login-button'>Login</button>
                    <button className='login-button'>Register</button>
                </div>
            </div>
        </nav>
    );
};

export default Header_up;
