import React, {ChangeEvent, useState} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ChangeAllAddText, PostsTypes} from "../../../redux/store";
import {addPostActoinCreator, updateNewPostActionCreator} from "../../../redux/profile-reduser";
import store from "../../../redux/redux.store";


type MyPostsType = {
    posts: Array<PostsTypes>
    dispatch: any
    messageForNewPost: string

}


const MyPosts = (props: MyPostsType) => {
    debugger
    let postsElements = props.posts.map(p => <Post message={p.message} likekounts={p.likekounts}/>)
   /* const [valueTextarea, setValuearea] =useState("")*/
/*

    let AddPost = () => {
    //    props.addPost(valueTextarea)
        props.dispatch(addPostActoinCreator(valueTextarea))
        setValuearea("")
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValuearea(e.currentTarget.value)
    }
*/




    const addPost = () => {
        if (props.messageForNewPost.trim()) {
            props.dispatch(addPostActoinCreator(props.messageForNewPost))

        } else {
            props.dispatch(updateNewPostActionCreator(""))

        }
    }

    const changeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
debugger
        props.dispatch(updateNewPostActionCreator(event.currentTarget.value))//dispatch?
    }








    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                <textarea onChange={changeHandler}
                          value={props.messageForNewPost} />
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