import React from 'react';
import {AddPostActionType, ChangeAllAddText, PostsTypes, profilePageType, UpdateNewPostTextType} from "./store";

export const addPostActoinCreator = (): AddPostActionType => ({
        type: "ADD-POST",

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
    if (action.type === "ADD-POST") {
        let text = state.messageForNewPost
        let newPost: PostsTypes = {
            id: 6,
            likekounts: 0,
            message: text
        }

        state.posts.push(newPost)
        state.messageForNewPost = ""
        return {...state}
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
        debugger
        return {...state, messageForNewPost: action.newText}
    } else {
        return state
    }

}



export default profileReducer



