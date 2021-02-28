import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';

function Navbar() {
    return (
        <div className="navbar">
            <h2 className="title">RIWAQ<br/>International</h2>
            <ul className="navbarList">
                <Link to='/'><li className="navbarListItem">HOME</li></Link>
                <Link to='/about'><li className="navbarListItem">ABOUT US</li></Link>
                <Link to='/contact'><li className="navbarListItem">CONTACT US</li></Link>
                <Link to='/signup'><li className="navbarListItem">SIGN UP</li></Link>
                <li className="navbarListItem">Hi, Bilal</li>
            </ul>
        </div>
    );
}

export default Navbar;