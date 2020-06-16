import React from 'react';
import TextButton from '../text-button';

import './second-screen.scss'
import img from '../../images/man-laptop-v1.svg'

const SecondScreen = () => {
    
    return (
        <section className='second' id='second'>
            <h2 className='second__header'>Let's get acquainted</h2>
            <div className='second__wrapper'>
                <img src={img}/>
                <div className='second__text-wrapper'>
                    <h3 className='second__subheader'>I am cool frontend developer</h3>
                    <p className='second__paragraph'>
                    We will evaluate how clean your approach to writing CSS and Javascript code is.
                    You can use any CSS and Javascript 3rd party libraries without any restriction.
                     <br/>
                     <br/>
                    If 3rd party css/javascript libraries are added to the project via bower/npm/yarn
                    you will get bonus points. If you use any task runner (gulp/webpack) you will get
                    bonus points as well. Slice service directory page P​SD mockup​ into HTML5/CSS3. 
                    <br/>
                    </p>
                    <TextButton text='Sing up now'/>
                </div>
            </div>
        </section>
    )
}

export default SecondScreen;