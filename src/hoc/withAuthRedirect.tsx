import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {appStateType} from "../redux/redux.store";
import {UsersPropsType} from "../components/users/Users";
import {ProfileType} from "../components/profile/Profile";
import {DialogsType} from "../components/Dialogs/Dialogs";

type mapStateToPropsType = {
    isAuth: boolean
}

let mapStateToProps = (state: appStateType):mapStateToPropsType => ({
        isAuth: state.auth.isAuth
})

type PropsType = DialogsType | UsersPropsType | ProfileType

export const withAuthRedirect = (Component: any) => {
    const RedirectComponent = (props: PropsType & mapStateToPropsType) => {
        if (!props.isAuth) return <Redirect to={"/login"}/>
        return <Component {...props}/>
    };
    return connect(mapStateToProps)(RedirectComponent)
}

