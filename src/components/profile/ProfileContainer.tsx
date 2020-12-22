import React from 'react';
import {appStateType} from "../../redux/redux.store";
import Profile from "./Profile";
import axios, {AxiosResponse} from "axios";
import {connect} from "react-redux";
import {

    newProfileType,
    setUsersProfile,

} from "../../redux/profile-reduser";




type mapStateToPropsType ={
    profile: newProfileType | null
}
type mapDispathToPropsType={
    setUsersProfile: (profile: newProfileType)=>void
}
export type ProfilePropsType=mapStateToPropsType & mapDispathToPropsType
class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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


export default connect<mapStateToPropsType, mapDispathToPropsType,{}, appStateType>( mapStateToProps, {
    setUsersProfile
})(ProfileContainer)

