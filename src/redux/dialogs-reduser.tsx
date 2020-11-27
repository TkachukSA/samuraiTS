import React from 'react';
import {ChangeAllAddText, messagePageType, MessagesType, PostsTypes, profilePageType, StroreType} from "./store";


export const addMessageActoinCreator =(postMessage: string) =>{
    return { type: "ADD-MESSAGE", postMessage} as const
}

let initialState:messagePageType ={
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
}

type DialogsReducerType={
    action: (action: ChangeAllAddText)=>void
    state: messagePageType
}
function dialogsReducer(state:messagePageType = initialState, action:ChangeAllAddText) {

    if (action.type ==="ADD-MESSAGE" ){

        state.messagesForMessages=(action.postMessage)
        let newMessage: MessagesType = {
            id: 6,
            message: state.messagesForMessages
        }

        state.messages.push(newMessage)
        //  this.rerenderEntireTree()

    }return state
}

export default dialogsReducer