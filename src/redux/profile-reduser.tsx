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

    switch (action.type) {
        case "ADD-POST":
            let text = state.messageForNewPost
            let newPost: PostsTypes = {
                id: 6,
                likekounts: 0,
                message: text
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]

            stateCopy.posts.push(newPost)
            stateCopy.messageForNewPost = ""
            return stateCopy
        case "UPDATE-NEW-POST-TEXT":
            return {...state, messageForNewPost: action.newText}
        default:
            return state
    }

}



export default profileReducer



