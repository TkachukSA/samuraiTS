import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainet from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/header.container";
import Login from "./components/login/Login";





function App() {



    return (

        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/users' render={() => <UsersContainet/>}/>
                <Route path='/login' render={() => <Login/>}/>
            </div>
        </div>
    )
}


export default App;