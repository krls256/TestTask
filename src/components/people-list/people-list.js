import React from 'react';
import { connect } from 'react-redux';
import Spinner from '../spinner' 
import PersonCard from './person-card'

import './people-list.scss'

const PeopleList = ({usersList}) => {
    const Arr =  usersList.map(item => <PersonCard data={item} key={item.id}/>)
    const content = usersList.length === 0 ? <Spinner/> : <div className='people-list'>{Arr}</div>;
    return content
}

const mapStateToProps = ({usersList}) => ({usersList})

export default connect(mapStateToProps)(PeopleList);