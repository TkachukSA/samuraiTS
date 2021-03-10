
import {appStateType} from "../../../redux/redux.store";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


import {ActionPageType, addPostActoinCreator,} from "../../../redux/profile-reduser";


type mapDispathToPropsType={
    addPost: (value: string)=>void

}

let mapStateToProps=(state:appStateType)=>{
    return{

        posts: state.profilePage.posts
    }
}

let mapDispathToProps=(dispatch:(action: ActionPageType) => void ):mapDispathToPropsType=>{
    return{
        addPost: (value: string)=>{dispatch(addPostActoinCreator(value))},
    }
}

const MyPostsContainer=connect(mapStateToProps, mapDispathToProps)(MyPosts)

export default MyPostsContainer