import React from 'react';

import './radio.scss'

const Radio = ({chacked, setChacked, position }) => {
    if (!position) {
        position = [{}, {}, {}, {}];
    }
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
            {position[0].name}
            </label>
        </div>
        <div className="radio">
            <label>
            <input type="radio" value="2" 
            checked={chacked === '2'}
            onChange={change}/>
            {position[1].name}
            </label>
        </div>
        <div className="radio">
            <label>
            <input type="radio" value="3" 
            checked={chacked === '3'}
            onChange={change}/>
            {position[2].name}
            </label>
        </div>
        <div className="radio">
            <label>
            <input type="radio" value="4" 
            checked={chacked === '4'}
            onChange={change}/>
            {position[3].name}
            </label>
        </div>
    </div>
  )
};

export default Radio;