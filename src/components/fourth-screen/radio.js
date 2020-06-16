import React from 'react';

import './radio.scss'

const Radio = ({chacked, setChacked}) => {
    const change = (e) => {
        setChacked(e.currentTarget.value);
    }
    return (
    <div className='radio-wrapper'>
        <div className="radio">
            <label>
            <input type="radio" value="1" 
            checked={chacked === '1'} 
            onChange={change}/>
            Frontend developer
            </label>
        </div>
        <div className="radio">
            <label>
            <input type="radio" value="2" 
            checked={chacked === '2'}
            onChange={change}/>
            Backend developer
            </label>
        </div>
        <div className="radio">
            <label>
            <input type="radio" value="3" 
            checked={chacked === '3'}
            onChange={change}/>
            Designer
            </label>
        </div>
        <div className="radio">
            <label>
            <input type="radio" value="4" 
            checked={chacked === '4'}
            onChange={change}/>
            QA
            </label>
        </div>
    </div>
  )
};

export default Radio;