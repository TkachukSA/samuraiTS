import React from 'react';
import {ChangeAllAddText, messagePageType, MessagesType, PostsTypes, profilePageType, StroreType} from "./state";


export const addMessageActoinCreator =(postMessage: string) =>{
    return { type: "ADD-MESSAGE", postMessage} as const
}


type DialogsReducerType={
    action: (action: ChangeAllAddText)=>void
    state: messagePageType
}
function DialogsReducer(state:messagePageType, action:ChangeAllAddText) {

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

export default DialogsReducer