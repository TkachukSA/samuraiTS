import React from 'react';
import {
    addMessageActoinCreatorType,
    ChangeAllAddText,
    MessagePageType,
    UpdateNewMessageType
} from "./store";
import {v1} from "uuid";


export const addMessageActoinCreator = ():addMessageActoinCreatorType => ({
    type: "ADD-MESSAGE",
    /*postMessage: title*/
})


export const UpdateNewMessageCreator = (title: string):UpdateNewMessageType => ({
    type: "UPDATE-NEW-MESSAGE-TEXT",
    newText: title
})

let initialState:MessagePageType ={
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
}


function dialogsReducer(state:MessagePageType = initialState, action:ChangeAllAddText):MessagePageType {

    switch (action.type) {
        case "ADD-MESSAGE":
            let text = state.messagesForMessages
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: text}],
                messagesForMessages: ""
            }
        case "UPDATE-NEW-MESSAGE-TEXT":
            return {...state, messagesForMessages: action.newText}
        default:
            return state
    }

}

export default dialogsReducer