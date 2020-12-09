import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import {Route} from "react-router-dom";

import {StoreReduxType} from "./redux/redux.store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainet from "./components/users/UsersContainer";




type appType = {
    Store?: StoreReduxType
    dispatch?: any
}

function App(props: appType) {


    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/users' render={() => <UsersContainet/>}/>
            </div>
        </div>
    )
}


export default App;