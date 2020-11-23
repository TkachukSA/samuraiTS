import React from 'react';
import {ChangeAllAddText, MessagesType, PostsTypes, profilePageType} from "./state";

export const addPostActoinCreator =(postText: string) =>{
    return { type: "ADD-POST", postText} as const
}

function ProfileReducer(state:profilePageType, action:ChangeAllAddText){

    if (action.type ==="ADD-POST" ){
        state.messageForNewPost = action.postText
        let newPost: PostsTypes = {
            id: 6,
            likekounts: 0,
            message: state.messageForNewPost
        }

        state.posts.push(newPost)

      //  this.rerenderEntireTree()
    } return state

}


export default ProfileReducer