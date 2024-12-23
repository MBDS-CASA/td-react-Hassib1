import React from 'react'
import logo from '../../assets/logo.jpg'

const Header = () => {
    return (
        <header>
            <img src={logo} alt="Logo" />
            <h1>Introduction à React</h1>
            <p>A la découverte des premières notions de React</p>
        </header>
    )
}

export default Header;