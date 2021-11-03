import React from 'react';


export const Icon = ({ name, link }) => {

    return (

        <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={name} alt={name} />
        </a>

    )
}
