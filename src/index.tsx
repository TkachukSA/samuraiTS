import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';

import ReactDOM from "react-dom";

import { Provider } from 'react-redux'

import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux.store";
import App from "./App";




const rerenderEntireTree = () => {
    ReactDOM.render(
      
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>,
        </BrowserRouter>,
        document.getElementById('root'));
}


rerenderEntireTree()


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
