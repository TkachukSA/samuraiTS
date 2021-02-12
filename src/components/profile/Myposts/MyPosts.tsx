import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsTypes} from "../../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/formsControl/FormsControl";


type MyPostsType = {
    posts: Array<PostsTypes>
    addPost: (value: string) => void


}

const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likekounts={p.likekounts} id={p.id} key={p.id}/>)







    const addPost = (formData: FormDataType) => {
        props.addPost(formData.newPostBody)
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>

                <AddNewPostReduxForm onSubmit={addPost}/>

            </div>
            <div className={s.posts}>
                {postsElements}

            </div>
        </div>

    )
}
export default MyPosts

type FormDataType = {
    newPostBody: string
}
const maxLength20 = maxLength(20)
const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter new post'}  validate={[maxLength20, required]}name={'newPostBody'} component={TextArea}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddNewPostReduxForm = reduxForm<FormDataType>({form: 'AddNewPostForm'})(AddNewPostForm)