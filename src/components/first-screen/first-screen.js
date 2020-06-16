import React, {useEffect, useState} from 'react';
import Button from '../button';

import './first-screen.scss';

const FirstScreen = () => {
    return (
        <section className='first' id='first'>
            <h2 className='first__header'>Test assignment <br/>for Frontend <br/>Developer position</h2>
            <p className='first__paragraph'>We kindly remind you that your test assignment should be 
            submitted as a link to github/bitbucket repository. Please be patient, we consider and
             respond to every application that meets minimum requirements. We look forward to your
             submission. Good luck! The photo has to scale in the banner area on the different screens</p>
            <Button text='Sing up now'/>
        </section>
    )
}

export default FirstScreen;