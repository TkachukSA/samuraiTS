import React from 'react';
import Header from "./header";
import {appStateType} from "../../redux/redux.store";
import {connect} from "react-redux";
import { setAuthUserData} from "../../redux/auth-reduser";
import {userApi} from "../../api/api";





type mapStateToPropsType ={
    isAuth: boolean
    login: string | null
}
type mapDispathToPropsType= {
    setAuthUserData: (id: number, email: string, login: string)=>void
}
type HeaderPropsType = mapStateToPropsType & mapDispathToPropsType


class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        userApi.getLogin()
            .then((data) => {
                if(data.resultCode===0){
                    let { id, email, login}=data.data
                    this.props.setAuthUserData(id, email, login)
                }})
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

export default connect<mapStateToPropsType,mapDispathToPropsType,{}, appStateType>(mapStateToProps,{setAuthUserData}) (HeaderContainer)