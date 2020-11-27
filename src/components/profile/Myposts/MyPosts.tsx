import React, {ChangeEvent, useState} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ChangeAllAddText, PostsTypes} from "../../../redux/store";
import {addPostActoinCreator, updateNewPostActionCreator} from "../../../redux/profile-reduser";



type MyPostsType = {
    posts: Array<PostsTypes>
    dispatch: (action: ChangeAllAddText) => void
    messageForNewPost: string

}


const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likekounts={p.likekounts}/>)


    const addPost = () => {
        if (props.messageForNewPost.trim()) {
            props.dispatch(addPostActoinCreator(props.messageForNewPost))

        } else {
            props.dispatch(updateNewPostActionCreator(""))
        }
    }

    const changeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostActionCreator(event.currentTarget.value))
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                <textarea onChange={changeHandler}
                          value={props.messageForNewPost}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElements}

            </div>
        </div>

    )
}
export default MyPosts