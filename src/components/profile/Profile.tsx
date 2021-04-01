import React from 'react';
import Profileinfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Myposts/MyPostsContainer";
import {newProfileType} from "../../redux/profile-reduser";


export type ProfileType = {
    profile: newProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: any) => void
    saveProfile: (photo: any) => void
}

const Profile = (props: ProfileType) => {

    return (
        <div>
            <Profileinfo saveProfile={props.saveProfile}
                         savePhoto={props.savePhoto}
                         isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
            />
            <MyPostsContainer/>
        </div>

    )
}
export default Profile




