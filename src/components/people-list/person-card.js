import React from 'react';

import './person-card.scss'

const PersonCard = ({data}) => {
    const {photo, position, name, email, phone} = data;
    return (
        <div className='card'>
            <img src={photo} className='card__img' alt={position}/>
            <p className='card__name'>
                {name}
                <span className="card__name-tooltip">{name}</span>
            </p>

            <p className='card__text'>
                {position} <br/>
                {email} <br/>
                {phone} <br/>
                <span className=" card__text-tooltip">{email}</span>
            </p>
        
        </div>
    )
}

export default PersonCard;