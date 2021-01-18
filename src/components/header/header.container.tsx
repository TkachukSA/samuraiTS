import React from 'react';
import Header from "./header";
import {appStateType} from "../../redux/redux.store";
import {connect} from "react-redux";
import {getAuthUserData, logoutTC} from "../../redux/auth-reduser";






type mapStateToPropsType ={
    isAuth: boolean
    login: string | null
}
type mapDispathToPropsType= {
   // setAuthUserData: (id: number, email: string, login: string)=>void
    getAuthUserData: ()=>void
    logoutTC : ()=>void
}
type HeaderPropsType = mapStateToPropsType & mapDispathToPropsType


class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        this.props.getAuthUserData()

    }

    render() {
        return <Header {...this.props}/>
    }

}

let mapStateToProps=(state:appStateType):mapStateToPropsType=>{
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect<mapStateToPropsType,mapDispathToPropsType,{}, appStateType>(mapStateToProps,{
    getAuthUserData,logoutTC}) (HeaderContainer)