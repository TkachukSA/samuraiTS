import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {stateType} from "./redux/state";
import {rerenderEntireTree} from "./render";


// необхлдимо устоновить BrowserRouter. вся компонента окружается BrowserRouter
// в компоненту добавляем Route
// exact - точное совпадение адреса

type appType = {
    state: stateType
    addPost: (postText: string) => void
    addMessage: (postMessage: string) => void


}

function App(props: appType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={() => <Profile

                        profilePage={props.state.profilePage}
                        addPost={props.addPost}

                    />}/>
                    <Route path='/dialogs' render={() => <Dialogs
                        dialogsPage={props.state.dialogsPage}
                        addMessage={props.addMessage}
                    />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
