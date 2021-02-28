import React from 'react';
import './homepage.css';

function Footer() {
    return (
        <div className="footerContainer">
            <div className="footer">
                <div className="location">
                    <h3>LOCATION</h3>
                    <p>Lahore,Pk</p>
                </div>
                <div className="socialLinks">
                    <h3>AROUND THE WEB</h3>
                    <p>Social media icons</p>
                </div>
                <div className="about">
                    <h3>ABOUT</h3>
                    <p>This is a stock trading app</p>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright &copy; 2020</p>
            </div>
        </div>
    );
}

export default Footer;