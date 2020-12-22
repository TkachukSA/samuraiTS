import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import { PostsTypes} from "../../../redux/store";




type MyPostsType = {
    posts: Array<PostsTypes>
    messageForNewPost: string
    addPost: ()=>void
    changeHandler: (body: string)=>void

}

const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likekounts={p.likekounts} id={p.id} key={p.id}/>)


    const addPost = () => {
        props.addPost()
    }

    const changeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let body = event.currentTarget.value
        props.changeHandler(body)
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