import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {addMessage, addPost, stateType} from "./redux/state";

export const rerenderEntireTree = (state: stateType) => {
    ReactDOM.render(<App state={state}
                         addPost={addPost}

                         addMessage={addMessage}/>,
        document.getElementById('root'));
}