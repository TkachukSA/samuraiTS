import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ChangeAllAddText, StroreType} from "./redux/state";




type appType = {
    Store: StroreType
    /*addPost: (postText: string) => void
    addMessage: (postMessage: string) => void*/
    dispatch: (action: ChangeAllAddText)=>void


}

function App(props: appType) {
    const state = props.Store.getState()
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={() => <Profile
                        profilePage={state.profilePage}
                        dispatch={props.Store.dispatch.bind(props.Store)}

                    />}/>
                    <Route path='/dialogs' render={() => <Dialogs
                        dialogsPage={state.dialogsPage}
                        dispatch={props.Store.dispatch.bind(props.Store)}
                    />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
