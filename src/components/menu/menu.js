import React from 'react';
import MenuList from '../menu-list';
import { connect } from 'react-redux';
import * as actions from '../../actions'

import './menu.scss';
import logo from '../../images/logo.svg';
import menu from '../../images/menu-icon.svg'

const Menu = ({hidden, set_hidden}) => {
    return (
        <nav className='menu'>
            <img src={logo} alt='logo'/>
            <MenuList/>
            <div onClick={() => {
                set_hidden(!hidden)
            }} className='menu__wrapper'>
                <img src={menu} alt='burger' className='menu__burger'/>
            </div>
            
        </nav>
    )
}

const mapStateToProps = ({hidden}) => ({hidden});

export default connect(mapStateToProps, actions)(Menu);