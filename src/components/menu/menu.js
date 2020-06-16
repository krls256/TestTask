import React from 'react';
import MenuList from '../menu-list';

import './menu.scss';
import logo from '../../images/logo.svg';

const Menu = () => {
    return (
        <nav className='menu'>
            <img src={logo} alt='logo'/>
            <MenuList/>
        </nav>
    )
}

export default Menu;