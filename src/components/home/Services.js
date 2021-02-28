import React from 'react';
import './homepage.css';
import trading from './trading.jpg';

function Services(props) {
    return (
        <div className={props.alignment === 'left' ? "serviceInfoContainerLeft" : "serviceInfoContainerRight"}>
            <img src={trading} alt="stock market" className="image"/>
            <div className={props.alignment === 'left' ? "serviceInfoBoxLeft" : "serviceInfoBoxRight"}>
                <h2>{props.name}</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ut consequat est a blandit mattis. Nunc ornare egestas pretium.
                    Proin ut blandit sapien. Sed laoreet ligula non erat tincidunt
                    ultricies. Proin bibendum maximus quam, ac accumsan sem facilisis laoreet.
                    Praesent tincidunt euismod ante, vel egestas ligula malesuada sit amet.
                </p>
                <span className="readMore">Read More...</span>
            </div>
        </div>
    );
}

export default Services;