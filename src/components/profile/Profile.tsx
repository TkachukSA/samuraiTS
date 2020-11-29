import React from 'react';
import Profileinfo from "./ProfileInfo/ProfileInfo";
import {StoreReduxType} from "../../redux/redux.store";
import MyPostsContainer from "./Myposts/MyPostsContainer";


type ProfileType= {
    store: StoreReduxType
}

const Profile = (props: ProfileType) => {
    let store = props.store.getState()
    return (
        <div >

            <Profileinfo/>
            <MyPostsContainer store={props.store}

            />


        </div>

    )
}
export default Profile




