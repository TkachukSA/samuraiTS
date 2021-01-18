import React from 'react';
import dialogsReducer, {MessagePageType, MessagesType} from "./dialogs-reduser";
import profileReducer, {newProfileType} from "./profile-reduser";
import saidbarReducer from "./saidbar-reduser";
import {v1} from "uuid";
import {folowActionType, setUsersActionType, unFolowActionType} from "./users-reduser";


export type PostsTypes = {
    id: string
    message: string
    likekounts: number

}



export type profilePageType = {
    profile: null | number
    messageForNewPost: string
    posts: Array<PostsTypes>
}
export type sidebar = {}
export type stateType = {
    profilePage: profilePageType
    dialogsPage: MessagePageType
    sidebar: {}
}


export type ChangeAllAddText =

    | UpdateNewMessageType
    | addMessageActoinCreatorType
    | folowActionType
    | unFolowActionType
    | setUsersActionType


export type StroreType = {
    _state: stateType
    addPost: (postText: string) => void
    addMessage: (postMessage: string) => void
    rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => stateType
    dispatch: (action: ChangeAllAddText) => void
}


export type addMessageActoinCreatorType = {
    type: "ADD-MESSAGE"
    value: string
    /*postMessage: string*/
}
export type UpdateNewMessageType = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    newText: string
}




const store: StroreType = {
    _state: {
        profilePage: {
            profile: null,
            messageForNewPost: "",
            posts: [
                {id: v1(), message: 'Hi, how are you*?', likekounts: 12},
                {id: v1(), message: 'its my first post', likekounts: 33},
                {id: v1(), message: 'go in iron', likekounts: 333},
                {id: v1(), message: 'its my life', likekounts: 333}
            ],
        },
        dialogsPage: {
            dialogs: [
                {id: v1(), name: "Nastya"},
                {id: v1(), name: "Vlad"},
                {id: v1(), name: "Vika"},
                {id: v1(), name: "Andrey"},
                {id: v1(), name: "Vasia"}
            ],

            messages: [
                {id: v1(), message: "hi how is your programmnig"},
                {id: v1(), message: "hi, its ok\""},
                {id: v1(), message: "Good"},
                {id: v1(), message: "ok"},
                {id: v1(), message: "yo"}
            ]
        },
        sidebar: {}
    },
    addPost(postText: string) {
        this._state.profilePage.messageForNewPost = postText
        let newPost: PostsTypes = {
            id: v1(),
            likekounts: 0,
            message: this._state.profilePage.messageForNewPost
        }

        this._state.profilePage.posts.push(newPost)

        this.rerenderEntireTree()
    },
    addMessage(postMessage: string) {

        let newMessage = {
            id: v1(),

        }

        this._state.dialogsPage.messages.push()
        this.rerenderEntireTree()
    },
    rerenderEntireTree() {
        console.log('State Changed')
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
   /*     this._state.profilePage = profileReducer(this._state.profilePage, action)*/
        /* this._state.sidebar=saidbarReducer()*/
        this.rerenderEntireTree()

    }


}


export default store

