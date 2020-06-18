import React, { useState } from 'react';
import { connect } from 'react-redux';
import {nameValid, emailValid, numValid} from './validation';
import ClientServise from '../../servises/client-servies';
import * as actions from '../../actions'
import Radio from './radio';
import Spinner from '../spinner'

import Button from '../button'
import './fourth-screen.scss'

const FourthScreen = ({set_modal}) => {
    const clientServise = new ClientServise()

    let inputNameStyle = 'input';
    let inputEmailStyle = 'input';
    let inputNumStyle = 'input';
    let inputFileStyle = 'input input-label';

    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('');
    const [focusedName, setFocusedName] = useState(false);
    const [email, setEmail] = useState('');
    const [focusedEmail, setFocusedEmail] = useState(false);
    const [num, setNum] = useState('');
    const [focusedNum, setFocusedNum] = useState(false);
    const [chacked, setChacked] = useState('2')
    const [fileInp, setFileInp] = useState(null);
    const [file, setFile] = useState(null);
    const fileLabelText = file ? 'Your photo uploaded' : 'Upload your photo';

    let buttonDisabled = true;
    let buttonFn = (event) => {
        event.preventDefault();
    }
    if (focusedName && !nameValid(name)) {
        inputNameStyle += ' input-error'
    }
    if (focusedEmail && !emailValid(email)) {
        inputEmailStyle += ' input-error'
    }
    if (focusedNum && !numValid(num)) {
        inputNumStyle += ' input-error'
    }
    if(file) {
        inputFileStyle += ' input-satisfied'
    }
    
    if(nameValid(name) && emailValid(email) && numValid(num) && file) {
        buttonDisabled = false;
        buttonFn = (event) => {
            setLoading(true);
            event.preventDefault();
            const data = new FormData();
            data.append('position_id', chacked);
            data.append('name', name);
            data.append('email', email);
            data.append('phone', num.replace(/\s/g, ''));
            data.append('photo', file);

            
            clientServise.getTocken()
                .then(body => {
                   if (body.success) {
                       clientServise.postUser(data, body.token)
                        .then(() => {
                            setLoading(false)
                            set_modal(true)
                        })
                   }
                })
        }
    }

    const button = loading ? <Spinner color='white'/> : <Button text='Sing up now' center disabled={buttonDisabled} fn={buttonFn}/>
    return (
        <section className='fourth' id='fourth'>
            {frontPart()}
            <form>
                <div className='form__wrapper'>
                    <label>Name</label>
                    <input type='text' placeholder='Your name' className={inputNameStyle}
                    onInput={(e) => setName(e.currentTarget.value)}
                    onFocus={() => setFocusedName(true)}/> 

                    <label>Email</label>
                    <input type='email' placeholder='Your email' className={inputEmailStyle}
                    onInput={(e) => setEmail(e.currentTarget.value)}
                    onFocus={() => setFocusedEmail(true)}/> 

                    <label>Phone number</label>
                    <input type='tel' placeholder='+380 XX XXX XX XX' className={inputNumStyle}
                    onInput={(e) => setNum(e.currentTarget.value)}
                    onFocus={() => setFocusedNum(true)}/> 
                    <span className='input__prompt'>Еnter phone number in open format</span>

                    <label>Select your position</label>
                    <Radio chacked={chacked} setChacked={setChacked}/>
                    <label>Photo</label>
                    <input type="file" id='file' accept="image/*" 
                ref={(inp) => setFileInp(inp)}
                onChange={() => setFile(fileInp.files[fileInp.files.length - 1])}/>
                <label htmlFor='file' className={inputFileStyle}>
                    {fileLabelText}
                    <span>Browse</span>
                </label>
                </div>
               
                {button}
            </form>
        </section>
    )
}

export default connect(null, actions)(FourthScreen);

const frontPart = () => {
    return <React.Fragment>
        <h2 className='fourth__header'>
            Register to get a work
            </h2>
            <p className='fourth__subheader'>
                Attention! After successful registration and alert, 
                update the list of users in the block from the top
            </p>
    </React.Fragment>
}