import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ChangeAllAddText, StroreType} from "./redux/store";
import {StoreReduxType} from "./redux/redux.store";




type appType = {
    Store: StoreReduxType
    /*addPost: (postText: string) => void
    addMessage: (postMessage: string) => void*/
    dispatch: any


}

function App(props: appType) {
    const state = props.Store.getState()
    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={() => <Profile
                        profilePage={state.profilePage}
                        dispatch={props.dispatch}

                    />}/>
                    <Route path='/dialogs' render={() => <Dialogs
                        dialogsPage={state.dialogsPage}
                        dispatch={props.Store.dispatch.bind(props.Store)}
                    />}/>
                </div>
            </div>

    )
}


export default App;
