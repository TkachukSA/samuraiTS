import React from 'react';
import Profileinfo from "./ProfileInfo/ProfileInfo";
import {StoreReduxType} from "../../redux/redux.store";
import MyPostsContainer from "./Myposts/MyPostsContainer";
import {profilePageType} from "../../redux/store";
import {UsersType} from "../users/Users";
import {newProfileType} from "../../redux/profile-reduser";


export type ProfileType = {
    profile: newProfileType | null
}

const Profile = (props: ProfileType) => {

    return (
        <div>
            <Profileinfo profile={props.profile} />
            <MyPostsContainer/>
        </div>

    )
}
export default Profile




