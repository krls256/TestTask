import React from 'react'

import './text-button.scss'

const TextButton = ({text = '', fn= () => {}}) => {
    return (
    <a href='#fourth'>
        <span onClick={fn} className='text-button'>
        {text}
        </span>
    </a>
    )
}

export default TextButton;