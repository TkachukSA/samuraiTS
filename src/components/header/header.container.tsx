import React from 'react';
import Header from "./header";
import {appStateType} from "../../redux/redux.store";
import {connect} from "react-redux";
import {getAuthUserData, setAuthUserData} from "../../redux/auth-reduser";
import {authAPI, userApi} from "../../api/api";





type mapStateToPropsType ={
    isAuth: boolean
    login: string | null
}
type mapDispathToPropsType= {
   // setAuthUserData: (id: number, email: string, login: string)=>void
    getAuthUserData: ()=>void
}
type HeaderPropsType = mapStateToPropsType & mapDispathToPropsType


class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
        /*authAPI.me()
            .then((response) => {
                if(response.data.resultCode===0){
                    let { id, email, login}=response.data.data
                    this.props.setAuthUserData(id, email, login)
                }})*/
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
   // setAuthUserData,
    getAuthUserData}) (HeaderContainer)