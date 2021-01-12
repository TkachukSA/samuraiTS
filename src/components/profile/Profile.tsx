import React from 'react';
import Profileinfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Myposts/MyPostsContainer";
import {newProfileType} from "../../redux/profile-reduser";


export type ProfileType = {
    profile: newProfileType | null
    status: string
    updateStatus: (status: string) => void

}

const Profile = (props: ProfileType) => {

    return (
        <div>
            <Profileinfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer/>
        </div>

    )
}
export default Profile




