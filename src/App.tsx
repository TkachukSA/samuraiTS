import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainet from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/header.container";





function App() {


    return (

        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/users' render={() => <UsersContainet/>}/>
            </div>
        </div>
    )
}


export default App;