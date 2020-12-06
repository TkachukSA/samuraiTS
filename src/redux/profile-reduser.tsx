import React from 'react';
import {AddPostActionType, ChangeAllAddText, PostsTypes, profilePageType, UpdateNewPostTextType} from "./store";
import {v1} from "uuid";

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
        {id: v1(), message: 'Hi, how are you*?', likekounts: 12},
        {id: v1(), message: 'its my first post', likekounts: 33},
        {id: v1(), message: 'go in iron', likekounts: 333},
        {id: v1(), message: 'its my life', likekounts: 333}
    ],
}

const profileReducer = (state: profilePageType = initialState, action: ChangeAllAddText): profilePageType => {

    switch (action.type) {
        case "ADD-POST":
            let text = state.messageForNewPost
            let newPost: PostsTypes = {
                id: v1(),
                likekounts: 0,
                message: text
            }
            return {...state,
                posts:[...state.posts, newPost],
                messageForNewPost: ""
            }

        case "UPDATE-NEW-POST-TEXT":
            return {...state, messageForNewPost: action.newText}
        default:
            return state
    }

}



export default profileReducer



