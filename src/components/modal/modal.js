import React from 'react';
import {connect} from 'react-redux'
import Button from '../button';
import * as actions from '../../actions'

import './modal.scss'

const Modal = ({modal, set_modal, restart}) => {
    if (modal) {
        document.querySelector('body').style.overflow = 'hidden';
        return (
            <div className='modal'>
                <div className='modal__view'>
                    <div className='modal__first-line'>
                        <span className='modal__header'>Congratulations</span>
                        <span className='modal__close' onClick={() => {
                            set_modal(false);
                            restart();
                        }}>
                            <span className='modal__close-1'></span>
                            <span className='modal__close-2'></span>
                        </span>
                    </div>
                    <hr/>
                    <span className='modal__subheader'>You have successfully passed the registration</span>
                    <hr/>
                    <Button text='Great' modal fn={() => {
                        set_modal(false)
                        restart();
                    }}/>
                </div>
            </div>
        )
    }
    document.querySelector('body').style.overflow = 'auto';    
    return null;
}
const mapStateToProps = ({modal}) => ({modal})

export default connect(mapStateToProps, actions)(Modal)