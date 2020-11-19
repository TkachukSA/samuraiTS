import React from 'react';
import s from "./Profile.module.css";

import Profileinfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./Myposts/MyPosts";

import { profilePageType} from "../../redux/state";


type ProfileType= {
    profilePage: profilePageType
    addPost: (postText: string) => void

}

const Profile = (props: ProfileType) => {

    return (
        <div >

            <Profileinfo/>
            <MyPosts posts={props.profilePage.posts}
                     addPost={props.addPost} />


            </div>

    )
}
export default Profile







