import React from 'react'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import store from './store'
import ReactDOM from 'react-dom'
import App from './components/app'
import './main.scss'
import './fonts/fonts.scss'

ReactDOM.render(<Provider store={createStore(store)}>
    <App/>
</Provider>, document.getElementById("root"))