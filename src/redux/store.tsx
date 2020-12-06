import React from 'react';
import dialogsReducer from "./dialogs-reduser";
import profileReducer from "./profile-reduser";
import saidbarReducer from "./saidbar-reduser";
import {v1} from "uuid";


export type PostsTypes = {
    id: string
    message: string
    likekounts: number

}
export type dialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
}
export type MessagePageType = {
    dialogs: Array<dialogsType>
    messages: Array<MessagesType>
    messagesForMessages: string
}
export type profilePageType = {
    messageForNewPost: string
    posts: Array<PostsTypes>
}
export type sidebar = {}
export type stateType = {
    profilePage: profilePageType
    dialogsPage: MessagePageType
    sidebar: {}
}


export type ChangeAllAddText = AddPostActionType | UpdateNewPostTextType | UpdateNewMessageType | addMessageActoinCreatorType

export type StroreType = {
    _state: stateType
    addPost: (postText: string) => void
    addMessage: (postMessage: string) => void
    rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => stateType
    dispatch: (action: ChangeAllAddText) => void
}
export type AddPostActionType = {
    type: "ADD-POST"
    /*postText: string*/
}
export type UpdateNewPostTextType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
export type addMessageActoinCreatorType = {
    type: "ADD-MESSAGE"
    /*postMessage: string*/
}
export type UpdateNewMessageType = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    newText: string
}



const store: StroreType = {
    _state: {
        profilePage: {
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

            messagesForMessages: "",
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
        debugger
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
        debugger
        this._state.dialogsPage.messagesForMessages = postMessage
        let newMessage: MessagesType = {
            id: v1(),
            message: this._state.dialogsPage.messagesForMessages
        }

        this._state.dialogsPage.messages.push(newMessage)
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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        /* this._state.sidebar=saidbarReducer()*/
        this.rerenderEntireTree()

    }


}


export default store

