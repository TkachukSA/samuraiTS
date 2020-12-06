import React from 'react';
import Profileinfo from "./ProfileInfo/ProfileInfo";
import {StoreReduxType} from "../../redux/redux.store";
import MyPostsContainer from "./Myposts/MyPostsContainer";


type ProfileType = {
    store?: StoreReduxType
}

const Profile = (props: ProfileType) => {

    return (
        <div>
            <Profileinfo/>
            <MyPostsContainer
            />
        </div>

    )
}
export default Profile




