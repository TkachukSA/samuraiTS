import React from 'react';
import {
    addMessageActoinCreatorType,
    ChangeAllAddText,
    MessagePageType,
    MessagesType,
    PostsTypes,
    profilePageType,
    StroreType, UpdateNewMessageType
} from "./store";


export const addMessageActoinCreator = (title: string):addMessageActoinCreatorType => ({
    type: "ADD-MESSAGE",
    postMessage: title
})


export const UpdateNewMessageCreator = (title: string):UpdateNewMessageType => ({
    type: "UPDATE-NEW-MESSAGE-TEXT",
    newText: title
})





let initialState:MessagePageType ={
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

/*type DialogsReducerType={
    action: (action: ChangeAllAddText)=>void
    state: MessagePageType
}*/
function dialogsReducer(state:MessagePageType = initialState, action:ChangeAllAddText):MessagePageType {

    if (action.type ==="ADD-MESSAGE" ) {

        state.messagesForMessages = (action.postMessage)
        let newMessage: MessagesType = {
            id: 6,
            message: state.messagesForMessages
        }
        state.messagesForMessages = ""
        state.messages.push(newMessage)
        return {...state}
    } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
        return {...state, messagesForMessages: action.newText}
    } else {
        return state
    }

}

export default dialogsReducer