import React from 'react';
import Header from "./header";
import {appStateType} from "../../redux/redux.store";
import {connect} from "react-redux";
import {logoutTC} from "../../redux/auth-reduser";


type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
type mapDispathToPropsType = {
    logoutTC: () => void
}
type HeaderPropsType = mapStateToPropsType & mapDispathToPropsType


class HeaderContainer extends React.Component<HeaderPropsType> {


    render() {
        return <Header {...this.props}/>
    }

}

let mapStateToProps = (state: appStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect<mapStateToPropsType, mapDispathToPropsType, {}, appStateType>(mapStateToProps, {
    logoutTC
})(HeaderContainer)