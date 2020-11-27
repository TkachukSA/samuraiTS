import React from 'react';
import {ChangeAllAddText, PostsTypes, profilePageType} from "./store";

export const addPostActoinCreator =(postText: string) =>{
    return { type: "ADD-POST", postText} as const
}

export type UpdateNewPostTextType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}

let initialState:profilePageType ={
    messageForNewPost: "",
    posts: [
        {id: 1, message: 'Hi, how are you*?', likekounts: 12},
        {id: 2, message: 'its my first post', likekounts: 33},
        {id: 3, message: 'go in iron', likekounts: 333},
        {id: 3, message: 'its my life', likekounts: 333}
    ],
}

function profileReducer(state:profilePageType = initialState, action:ChangeAllAddText){

    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsTypes = {
                id: 6,
                likekounts: 0,
                message: state.messageForNewPost
            }

            state.posts.push(newPost)
            state.messageForNewPost = ""
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.messageForNewPost = action.newText
            return state
        default:
            return state
    }

    return state

}

/*if (action.type ==="ADD-POST" ){
    state.messageForNewPost = action.postText
    let newPost: PostsTypes = {
        id: 6,
        likekounts: 0,
        message: state.messageForNewPost
    }

    state.posts.push(newPost)

    //  this.rerenderEntireTree()
} return state

}*/


export default profileReducer



