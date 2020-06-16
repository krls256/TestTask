import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'

import Menu from '../menu'
import FirstScreen from '../first-screen'
import SecondScreen from '../second-screen';
import ThirdScreen from '../third-screen';
import ClientServise from '../../servises/client-servies';

import './app.scss';
import FourthScreen from '../fourth-screen/fourth-screen';
import Footer from '../footer';


const App = ({more, max, getSize}) => {
    const clientServise = new ClientServise();
    useEffect(() => {
        clientServise.getUsers(getSize)
            .then(({users, total_users}) => { 
                max(total_users)
                more(users)})
    }, [getSize]);
    return (
        <div className="app">
            <Menu/>
            <FirstScreen/>
            <SecondScreen/>
            <ThirdScreen/>
            <FourthScreen/>
            <Footer/>
        </div>
    )
}
const mapStateToProps = ({getSize}) => ({getSize})
export default connect(mapStateToProps, actions)(App);