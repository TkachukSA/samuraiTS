import React from 'react';
import {appStateType} from "../../redux/redux.store";
import Profile from "./Profile";
import axios, {AxiosResponse} from "axios";
import {connect} from "react-redux";
import {getUserProfile, newProfileType, setUsersProfile} from "../../redux/profile-reduser";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {userApi} from "../../api/api";




type mapStateToPropsType ={
    profile: newProfileType | null
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
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

let mapStateToProps=(state: appStateType):mapStateToPropsType=>{
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent= withRouter(ProfileContainer)

export default connect<mapStateToPropsType, mapDispathToPropsType,{}, appStateType>( mapStateToProps, {
    getUserProfile,
    //setUsersProfile
})(WithUrlDataContainerComponent)


