import React from 'react';
import Navbar from './Navbar';
import Services from './Services';
import Footer from './Footer';
import './homepage.css';

function HomePage() {
    return (
        <div className="container">
            <Navbar />
            <div className="mainContent">
                <Services name="Stock Trading" alignment="left"/>
                <Services name="Forex Trading" alignment="right"/>
                <Services name="Import/Export" alignment="left"/>
                <Services name="Crypto Currency" alignment="right"/>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;