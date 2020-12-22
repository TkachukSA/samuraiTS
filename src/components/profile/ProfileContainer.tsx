import React from 'react';
import {appStateType} from "../../redux/redux.store";
import Profile from "./Profile";
import axios, {AxiosResponse} from "axios";
import {connect} from "react-redux";
import {newProfileType, setUsersProfile} from "../../redux/profile-reduser";
import {RouteComponentProps, withRouter} from 'react-router-dom';




type mapStateToPropsType ={
    profile: newProfileType | null
}
type mapDispathToPropsType={
    setUsersProfile: (profile: newProfileType)=>void
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then((response: AxiosResponse<any>) => {

                this.props.setUsersProfile(response.data)
            })
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
    setUsersProfile
})(WithUrlDataContainerComponent)


