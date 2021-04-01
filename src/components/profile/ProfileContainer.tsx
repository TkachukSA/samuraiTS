import React from 'react';
import {appStateType} from "../../redux/redux.store";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatus,
    getUserProfile,
    newProfileType,
    savePhoto,
    saveProfile,
    updateStatus
} from "../../redux/profile-reduser";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type mapStateToPropsType = {
    profile: newProfileType | null
    status: string
    autorisedUserId: any
    isAuth: boolean
}
type mapDispathToPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
    savePhoto: (photo: any) => void
    saveProfile: (photo: any) => void
}
type PathParamType = {
    userId: string
}

export type ProfilePropsType = mapStateToPropsType & mapDispathToPropsType

type PropsType = RouteComponentProps<PathParamType> & ProfilePropsType


class ProfileContainer extends React.Component<PropsType> {

    refreshPrrofile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.autorisedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshPrrofile()
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshPrrofile();
        }
    }

    render() {

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}
                         isOwner={!this.props.match.params.userId}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                         savePhoto={this.props.savePhoto}
                         saveProfile={this.props.saveProfile}
                />
            </div>
        );
    }
}

let mapStateToProps = (state: appStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        autorisedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default compose<any>(connect<mapStateToPropsType, mapDispathToPropsType, {}, appStateType>
(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile
}), withAuthRedirect, withRouter)(ProfileContainer)

/*

//функция compose заменяет этот код:
const  withRedirect = withAuthRedirect(ProfileContainer)

// для отображения на какой странице профиля находимся
let WithUrlDataContainerComponent= withRouter(withRedirect)

export default connect<mapStateToPropsType, mapDispathToPropsType,{}, appStateType>( mapStateToProps, {
    getUserProfile,
    //setUsersProfile
})(WithUrlDataContainerComponent)
*/
