import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions'

import './third-screen.scss';
import Button from '../button';
import PeopleList from '../people-list'

const ThirdScreen = ({maxSize, getSize, change_size}) => {
    const showMore = () => {
        change_size(maxSize)
    };
    const button = maxSize === getSize ? null : <Button text='Show more' 
            className='third_button' fn={showMore} show/>;

    return (
        <section className='third' id='third'>
            <h2 className='third__header'>Our cheerful users</h2>
            <p className='third__paragraph'>Attention! Sorting users by registration date</p>
            <PeopleList/>
            {button}
        </section>
    ) 
}

const mapStateToProps = ({maxSize, getSize}) => ({maxSize, getSize});

export default connect(mapStateToProps, actions)(ThirdScreen);