import React from 'react';
import logo from '../../images/online-learning-logo.png';
import './Header.css';
import Navigation from './Navigation';

const Header = () => {
    return (
        <div className="Header">
            <img src={logo} alt=""/>
            <h1> <strong>Online Education</strong> </h1>
            <Navigation></Navigation>
        </div>
    );
};

export default Header;