import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";

import {StoreReduxType} from "./redux/redux.store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";




type appType = {
    Store: StoreReduxType
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
                    store={props.Store}
                />}/>
                <Route path='/dialogs' render={() => <DialogsContainer
                    store={props.Store}
                />}/>
            </div>
        </div>
    )
}


export default App;