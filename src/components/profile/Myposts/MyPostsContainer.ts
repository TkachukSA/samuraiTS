
import {appStateType} from "../../../redux/redux.store";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


import {ActionPageType, addPostActoinCreator, updateNewPostActionCreator} from "../../../redux/profile-reduser";



type mapDispathToPropsType={
    addPost: ()=>void
    changeHandler: (body: string)=>void
}



let mapStateToProps=(state:appStateType)=>{
    return{
        messageForNewPost: state.profilePage.messageForNewPost,
        posts: state.profilePage.posts
    }
}

let mapDispathToProps=(dispatch:(action: ActionPageType) => void ):mapDispathToPropsType=>{
    return{
        addPost: ()=>{dispatch(addPostActoinCreator())},
        changeHandler: (body: string)=>{dispatch(updateNewPostActionCreator(body))}
    }
}

const MyPostsContainer=connect(mapStateToProps, mapDispathToProps)(MyPosts)

export default MyPostsContainer