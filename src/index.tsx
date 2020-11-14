import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

import {addMessage, addPost, stateType} from "./redux/state";

 const rerenderEntireTree = () => {
    ReactDOM.render(<App state={state}
                         addPost={addPost}

                         addMessage={addMessage}/>,
        document.getElementById('root'));
}


rerenderEntireTree()
subscribe(rerenderEntireTree)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
