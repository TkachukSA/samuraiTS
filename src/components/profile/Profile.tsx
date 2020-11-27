import React from 'react';
import s from "./Profile.module.css";

import Profileinfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./Myposts/MyPosts";

import {ChangeAllAddText, profilePageType} from "../../redux/store";


type ProfileType= {
    profilePage: profilePageType
    dispatch: (action: ChangeAllAddText)=>void

}

const Profile = (props: ProfileType) => {

    return (
        <div >

            <Profileinfo/>
            <MyPosts posts={props.profilePage.posts}
                     dispatch={props.dispatch.bind(props.dispatch)}
                     messageForNewPost={props.profilePage.messageForNewPost}
            />


            </div>

    )
}
export default Profile







