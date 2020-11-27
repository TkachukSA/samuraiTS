import React, {ChangeEvent, useState} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActoinCreator, ChangeAllAddText, PostsTypes} from "../../../redux/store";


type MyPostsType = {
    posts: Array<PostsTypes>
    /*addPost: (postText: string) => void*/
    dispatch: (action: ChangeAllAddText)=>void



}


const MyPosts = (props: MyPostsType) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likekounts={p.likekounts}/>)
    const [valueTextarea, setValuearea] =useState("")

    let AddPost = () => {
    //    props.addPost(valueTextarea)
        props.dispatch(addPostActoinCreator(valueTextarea))
        setValuearea("")
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValuearea(e.currentTarget.value)
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                <textarea onChange={onPostChange}
                          value={valueTextarea} />
                </div>
                <div>
                    <button onClick={AddPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElements}

            </div>
        </div>

    )
}
export default MyPosts