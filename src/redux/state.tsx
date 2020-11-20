import React from 'react';
import {type} from "os";


export type PostsTypes = {
    id: number
    message: string
    likekounts: number

}
export type dialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type messagePageType = {
    dialogs: Array<dialogsType>
    messages: Array<MessagesType>
    messagesForMessages: string
}
export type profilePageType = {
    messageForNewPost: string
    posts: Array<PostsTypes>
}
type sidebar = {}
export type stateType = {
    profilePage: profilePageType
    dialogsPage: messagePageType
    sidebar: {}
}
type ChengeAddPostType ={
    type: "ADD-POST"
    postText: string
}
type ChengeAddMessageType ={
    type: "ADD-MESSAGE"
    postMessage: string
}

export type ChangeAllAddText = ChengeAddPostType | ChengeAddMessageType

export type StroreType ={
    _state: stateType
    addPost:(postText: string)=>void
    addMessage:(postMessage: string)=>void
    rerenderEntireTree:()=>void
    subscribe: (observer:()=>void)=>void
    getState:()=>stateType
    dispatch: (action: ChangeAllAddText)=>void
}



export const addPostActoinCreator =(postText: string):ChengeAddPostType =>{
    return { type: "ADD-POST", postText}
}

export const addMessageActoinCreator =(postMessage: string):ChengeAddMessageType =>{
    return { type: "ADD-MESSAGE", postMessage}
}

const Store: StroreType ={
    _state:  {
        profilePage: {
            messageForNewPost: "",
            posts: [
                {id: 1, message: 'Hi, how are you*?', likekounts: 12},
                {id: 2, message: 'its my first post', likekounts: 33},
                {id: 3, message: 'go in iron', likekounts: 333},
                {id: 3, message: 'its my life', likekounts: 333}
            ],
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Nastya"},
                {id: 2, name: "Vlad"},
                {id: 3, name: "Vika"},
                {id: 4, name: "Andrey"},
                {id: 5, name: "Vasia"}
            ],

            messagesForMessages: "",
            messages: [
                {id: 1, message: "hi how is your programmnig"},
                {id: 2, message: "hi, its ok\""},
                {id: 3, message: "Good"},
                {id: 4, message: "ok"},
                {id: 5, message: "yo"}
            ]
        },
        sidebar: {}
    },
    addPost(postText: string)  {
        debugger
        this._state.profilePage.messageForNewPost = postText
        let newPost: PostsTypes = {
            id: 6,
            likekounts: 0,
            message: this._state.profilePage.messageForNewPost
        }

        this._state.profilePage.posts.push(newPost)

        this.rerenderEntireTree()
    },
    addMessage(postMessage: string)  {
        debugger
        this._state.dialogsPage.messagesForMessages = postMessage
        let newMessage: MessagesType = {
            id: 6,
            message: this._state.dialogsPage.messagesForMessages
        }

        this._state.dialogsPage.messages.push(newMessage)
        this.rerenderEntireTree()
    },
    rerenderEntireTree() {console.log('State Changed')},
    subscribe(observer){
        this.rerenderEntireTree=observer
    },
    getState(){
       return this._state
    },
    dispatch(action){
        if (action.type ==="ADD-POST" ){
            this._state.profilePage.messageForNewPost = action.postText
            let newPost: PostsTypes = {
                id: 6,
                likekounts: 0,
                message: this._state.profilePage.messageForNewPost
            }

            this._state.profilePage.posts.push(newPost)

            this.rerenderEntireTree()
        } else if (action.type ==="ADD-MESSAGE" ){
            this._state.dialogsPage.messagesForMessages = action.postMessage
            let newMessage: MessagesType = {
                id: 6,
                message: this._state.dialogsPage.messagesForMessages
            }

            this._state.dialogsPage.messages.push(newMessage)
            this.rerenderEntireTree()


        }
    }


}


export default Store

