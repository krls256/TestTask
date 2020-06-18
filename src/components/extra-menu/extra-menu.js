import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../../actions'

import './extra-menu.scss'

const ExtraMenu = ({hidden, set_hidden}) => {
    const arr1 = ['About me', 'Relationships' , 'Users', 'Sign Up', 'Terms and Conditions'];
    const arr2 = ['How it works', 'Partnership', 'Help', 'Leave testimonial', 'Contact us'];
    const arr3 = ['Articles', 'Our news', 'Testimonials', 'Licenses', 'Privacy Policy'];
    const arrToLi = (arr) => {
        return arr.map((item, index) => {
            let href = index === 0 ? '#' :
            index === 1 ?'#first' : 
            index === 2 ?'#second' :
            index === 3 ?'#third' : '#fourth';
        return <li className='extra-menu__item' key={item}
            onClick={() => set_hidden(true)}>
            <a href={href}>{item}</a>
        </li>
        })
    }
    let exStyles = 'extra-menu';
    if (hidden) {
        exStyles += ' extra-menu_hiden'
        document.querySelector('body').style.overflow = 'auto'
    } else {
        document.querySelector('body').style.overflow = 'hidden'
    }
    return (
        <div className={exStyles}>
            <ul className='extra-menu__list'>
                {arrToLi(arr1)}
                <hr/>
                {arrToLi(arr2)}
                <hr/>
                {arrToLi(arr3)}
            </ul>
        </div>
    )
}

const mapStateToProps = ({hidden}) => ({hidden});

export default connect(mapStateToProps, actions)(ExtraMenu);