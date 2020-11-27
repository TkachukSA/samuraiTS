import React from 'react';
import {AddPostActionType, ChangeAllAddText, PostsTypes, profilePageType, UpdateNewPostTextType} from "./store";

export const addPostActoinCreator = (text: string): AddPostActionType => ({
        type: "ADD-POST",
        postText: text
    }
)

export const updateNewPostActionCreator = (text: string): UpdateNewPostTextType =>
    ({
        type: "UPDATE-NEW-POST-TEXT",
        newText: text
    })


let initialState: profilePageType = {
    messageForNewPost: "",
    posts: [
        {id: 1, message: 'Hi, how are you*?', likekounts: 12},
        {id: 2, message: 'its my first post', likekounts: 33},
        {id: 3, message: 'go in iron', likekounts: 333},
        {id: 3, message: 'its my life', likekounts: 333}
    ],
}

const profileReducer = (state: profilePageType = initialState, action: ChangeAllAddText): profilePageType => {
    debugger
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsTypes = {
                id: 6,
                likekounts: 0,
                message: action.postText
            }

            state.posts.push(newPost)
            state.messageForNewPost = ""
            return {...state}
        case "UPDATE-NEW-POST-TEXT":
            debugger
            return {...state, messageForNewPost: action.newText}
        default:
            return state
    }

}



export default profileReducer



