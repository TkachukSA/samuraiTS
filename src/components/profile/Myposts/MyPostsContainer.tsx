import React from 'react';
import {addPostActoinCreator, updateNewPostActionCreator} from "../../../redux/profile-reduser";
import {appStateType} from "../../../redux/redux.store";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

import {ChangeAllAddText} from "../../../redux/store";





/*type MyPostsType = {
   store?: StoreReduxType

}*/

type mapDispathToPropsType={
    addPost: ()=>void
    changeHandler: (body: string)=>void
}


/*const MyPostsContainer = (props: MyPostsType) => {

    return (
        <StoreContext.Consumer>{
            (store)  =>{

                const addPost = () => {
                    let state = store.getState()
                    if (state.profilePage.messageForNewPost.trim()) {
                        store.dispatch(addPostActoinCreator(state.profilePage.messageForNewPost))
                    } else {
                        store.dispatch(updateNewPostActionCreator(""))
                    }
                }
                const changeHandler = (body: string) => {
                    store.dispatch(updateNewPostActionCreator(body))
                }
                return <MyPosts
            messageForNewPost={store.getState().profilePage.messageForNewPost}
            posts={store.getState().profilePage.posts}
            addPost={addPost}
            changeHandler={changeHandler}
        />}}
        </StoreContext.Consumer>
    )
}*/


let mapStateToProps=(state:appStateType)=>{
    return{
        messageForNewPost: state.profilePage.messageForNewPost,
        posts: state.profilePage.posts
    }
}

let mapDispathToProps=(dispatch:(action: ChangeAllAddText) => void ):mapDispathToPropsType=>{
    return{
        addPost: ()=>{dispatch(addPostActoinCreator())},
        changeHandler: (body: string)=>{dispatch(updateNewPostActionCreator(body))}
    }
}

const MyPostsContainer=connect(mapStateToProps, mapDispathToProps)(MyPosts)

export default MyPostsContainer