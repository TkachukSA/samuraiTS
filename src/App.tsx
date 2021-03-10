import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainet from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/header.container";
import Login from "./components/login/Login";
import {connect} from "react-redux";
import {appStateType} from "./redux/redux.store";
import {compose} from "redux";
import {initializedApp} from "./redux/app-reduser";
import Preloader from "./components/common/preloader/Preloader";
import {Chat} from "./chat/Chat";


type mapDispathToPropsType = {
    initializedApp: () => void
}


type mapStateToPropsType = {
    initialized: boolean
}


type HeaderPropsType = mapStateToPropsType & mapDispathToPropsType


class App extends React.Component<HeaderPropsType> {


    componentDidMount() {
        this.props.initializedApp()

    }

    render() {

        {
            if (!this.props.initialized) {
                return <Preloader/>
            }
        }


        return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>

                <div className="app-wrapper-content">
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>

                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/chat' render={() => <Chat/>}/>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state: appStateType): mapStateToPropsType => {
    return {

        initialized: state.app.initialized
    }
}


/*export default compose(withRouter, connect(null,{
    getAuthUserData})) (App)*/
/*type PathParamsType = {
    param1: string,
}

// Your component own properties
type PropsType = RouteComponentProps<PathParamsType> & {
    someString: string,
}*/


export default compose(/*withRouter*/connect<mapStateToPropsType, mapDispathToPropsType, {}, appStateType>(mapStateToProps, {
    initializedApp
}))(App)