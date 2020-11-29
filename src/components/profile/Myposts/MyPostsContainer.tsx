import React, {ChangeEvent, useState} from 'react';
import {addPostActoinCreator, updateNewPostActionCreator} from "../../../redux/profile-reduser";
import {StoreReduxType} from "../../../redux/redux.store";
import MyPosts from "./MyPosts";



type MyPostsType = {
   store: StoreReduxType
}


const MyPostsContainer = (props: MyPostsType) => {
    let state = props.store.getState()

    const addPost = () => {
        if (state.profilePage.messageForNewPost.trim()) {
            props.store.dispatch(addPostActoinCreator(state.profilePage.messageForNewPost))


        } else {
            props.store.dispatch(updateNewPostActionCreator(""))
        }
    }

    const changeHandler = (body: any) => {
        props.store.dispatch(updateNewPostActionCreator(body))
    }


    return (
        <MyPosts
            messageForNewPost={state.profilePage.messageForNewPost}
            posts={state.profilePage.posts}
            addPost={addPost}
            changeHandler={changeHandler}
        />

    )
}
export default MyPostsContainer