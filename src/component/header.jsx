import React from 'react';
import logo from '../assets/logo.jpg'

const Header = () => {
    return (
        <header>
            <img src={logo} alt="Logo" style={{ height: '60px', width: 'auto' }} />
        </header>
    );
};

export default Header;
