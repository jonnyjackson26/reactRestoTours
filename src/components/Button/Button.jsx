import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ text, onClick, to }) => {
    const buttonOrLink = to ? (
        <Link to={to} className="button-link" onClick={onClick}>
            {text}
        </Link>
    ) : (
        <button onClick={onClick} className="button">
            {text}
        </button>
    );

    return buttonOrLink;
};

export default Button;
