import React, {useState} from 'react';
import MenuList from '../menu-list';

import './menu.scss';
import logo from '../../images/logo.svg';
import menu from '../../images/menu-icon.svg'

const Menu = () => {
    const [hidden, setHidden] = useState(true)
    return (
        <nav className='menu'>
            <img src={logo} alt='logo'/>
            <MenuList hidden={hidden}/>
            <img src={menu} alt='burger' className='menu__burger'
            onClick={() => {setHidden(!hidden)}}/>
        </nav>
    )
}

export default Menu;