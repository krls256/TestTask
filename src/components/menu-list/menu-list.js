import React, {useState} from 'react';

import './menu-list.scss'

const MenuList = ({hidden}) => {
    
    const [styles, setStiles] = useState(['', '', '', '', '']);
    const set_active = (i) => {
        const newArr = ['', '', '', '', ''];
        newArr[i] = 'active';
        setStiles(newArr)
    }
    let listStyle = 'menu-list';
    if (hidden) {
        listStyle+=' menu-list_hidden'
    }
    return (
            <ul className={listStyle}>
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
                <Invisible styles={styles}/>         
            </ul>
    )
}

export default MenuList;

const Invisible = ({styles}) => {
    return (
        <div className='menu-list__invisible'>
                <hr/>
                <li ><a href="#" className={styles[0]}>
                How it works</a></li>
            <li><a href="#first" className={styles[1]}>
                Partnership</a></li>
            <li><a href="#second" className={styles[2]}>
                Help</a></li>
            <li><a href="#third" className={styles[3]}>
                Leave testimonial</a></li>
            <li><a href="#fourth" className={styles[4]}>
                Contact us</a></li>
                <hr/>
                <li ><a href="#" className={styles[0]}>
                Articles</a></li>
            <li><a href="#first" className={styles[1]}>
                Our news</a></li>
            <li><a href="#second" className={styles[2]}>
                Testimonials</a></li>
            <li><a href="#third" className={styles[3]}>
                Licenses</a></li>
            <li><a href="#fourth" className={styles[4]}>
                Privacy Policy</a></li>
            </div>
    )
}