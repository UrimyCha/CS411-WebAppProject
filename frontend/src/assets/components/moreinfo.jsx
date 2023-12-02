import React from 'react';

const CardComponent = (props) => {
    return (
        <a href={props.link} className="card-link">
        <div className={`card ${props.className}`}>
            <div className="card-image-container">
                <img src={props.image} alt="Card" className="card-image" />
            </div>
            <div className="card-description">
                <p>{props.description}</p>
            </div>
        </div>
        </a>
    );
};

export default CardComponent;

