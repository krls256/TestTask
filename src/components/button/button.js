import React from 'react';

import './button.scss';

const Button = ({text = '', fn = () => {}, disabled = false, center = false}) => {
    let className = 'button';
    if (disabled) {
        className += ' button-disabled';
    }
    if (center) {
        className += ' button-center'
    }
    return (
        <a href='#fourth'>
            <button onClick={fn} className={className}>
                {text}
            </button> 
        </a>
    )
}

export default Button;