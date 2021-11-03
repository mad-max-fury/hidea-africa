import React from 'react';
import './Button.css';


export const Button = ({ text, onClick, type, style, ...props }) => {
    return (
        <button
            className={type === 'submit' ? 'btn-primary' : 'btn'}
            type={type}
            onClick={onClick}
        >
            {text}
        </button>
    );
};
