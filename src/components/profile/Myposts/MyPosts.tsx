import React, {ChangeEvent, useState} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActoinCreator, ChangeAllAddText, PostsTypes} from "../../../redux/store";


type MyPostsType = {
    posts: Array<PostsTypes>
    dispatch: (action: ChangeAllAddText)=>void
    messageForNewPost: string

}


const MyPosts = (props: MyPostsType) => {
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
            props.dispatch(addPostActoinCreator(props.messageForNewPost))//addPostActionCreator(props.newPostText)
            //props.addPost(props.newPostText)
        } else {
            props.dispatch(addPostActoinCreator(""))
            //props.updatePostText("")
        }
    }

    const changeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {

        props.dispatch(addPostActoinCreator(event.currentTarget.value))//dispatch?
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