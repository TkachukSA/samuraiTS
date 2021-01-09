import React from 'react';
import {appStateType} from "../../redux/redux.store";
import Profile from "./Profile";
import axios, {AxiosResponse} from "axios";
import {connect} from "react-redux";
import {getUserProfile, newProfileType, setUsersProfile} from "../../redux/profile-reduser";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {userApi} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";




type mapStateToPropsType ={
    profile: newProfileType | null
    isAuth: boolean
}
type mapDispathToPropsType={
    //setUsersProfile: (profile: newProfileType)=>void
    getUserProfile:(userId: string)=>void
}
type PathParamType={
    userId: string
}

export type ProfilePropsType = mapStateToPropsType & mapDispathToPropsType

type PropsType= RouteComponentProps <PathParamType> & ProfilePropsType





class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId=this.props.match.params.userId
        if(!userId){
            userId='2'}
        this.props.getUserProfile(userId)
        /*axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)*/

        //Past 2
        /*userApi.getProfile(+userId)
            .then((response: AxiosResponse<any>) => {

                this.props.setUsersProfile(response.data)
            })*/
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={"/login"}/>
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

let mapStateToProps=(state: appStateType):mapStateToPropsType=>{
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}
const  withRedirect = withAuthRedirect(ProfileContainer)

// для отображения на какой странице профиля находимся
let WithUrlDataContainerComponent= withRouter(withRedirect)

export default connect<mapStateToPropsType, mapDispathToPropsType,{}, appStateType>( mapStateToProps, {
    getUserProfile,
    //setUsersProfile
})(WithUrlDataContainerComponent)


