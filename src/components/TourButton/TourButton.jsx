import React from 'react';
import { Link } from 'react-router-dom';
import './TourButton.css';

const TourButton = ({ name, date, imageUrl, linkTo }) => {
    return (
        <Link to={linkTo} className="tour-button">
            <div className="image-container">
                <img src={imageUrl} alt={name} className="tour-image" />
                <div className="text">
                    <p className="name">{name}</p>
                    <p className="date">{date}</p>
                </div>
            </div>
        </Link>
    );
};

export default TourButton;
