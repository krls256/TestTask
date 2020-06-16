import React, {useState} from 'react';

import './menu-list.scss'

const MenuList = () => {
    const [styles, setStiles] = useState(['', '', '', '', '']);
    const set_active = (i) => {
        const newArr = ['', '', '', '', ''];
        newArr[i] = 'active';
        setStiles(newArr)
    }
    

    return (
        <ul className='menu__list'>
            <li ><a href="#" className={styles[0]}
            onClick={() => {set_active(0)}}>
                About me</a></li>
            <li><a href="#first" className={styles[1]}
            onClick={() => {set_active(1)}}>
                Relationships</a></li>
            <li><a href="#second" className={styles[2]}
            onClick={() => {set_active(2)}}>
                Requirements</a></li>
            <li><a href="#third" className={styles[3]}
            onClick={() => {set_active(3)}}>
                Users</a></li>
            <li><a href="#fourth" className={styles[4]}
            onClick={() => {set_active(4)}}>
                Sign Up</a></li>
        </ul>
    )
}
const mapStateToProps = ({coords1, coords2, coords3, coords4, currentCoords}) => ({
    coords1, coords2, coords3, coords4, currentCoords
})

export default MenuList;