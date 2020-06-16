import React from 'react';

import spin from '../../images/spinner.svg';
import spin2 from '../../images/white-spinner.svg'
import './spinner.scss';

const Spinner = ({color = 'beige'}) => {
    const spinner = color === 'white' ? spin2 : spin
    return (
        <div className='spinner'>
            <img src={spinner}/>
        </div>
    )
}
export default Spinner;