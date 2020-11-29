import React, {ChangeEvent} from 'react';import { ChangeAllAddText, MessagePageType, stateType} from "../../redux/store";
import {addMessageActoinCreator, UpdateNewMessageCreator} from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import {StoreReduxType} from "../../redux/redux.store";




type DialogsType = {
    store: StoreReduxType
}

const DialogsContainer = (props: DialogsType) => {
    const store = props.store.getState().dialogsPage



    const addMessage = ()=>{
        if (store.messagesForMessages.trim()){
            props.store.dispatch(addMessageActoinCreator(store.messagesForMessages))
        } else {
            props.store.dispatch(UpdateNewMessageCreator(""))
        }
    }

    const changeHandler =(body: any)=>{
        props.store.dispatch(UpdateNewMessageCreator(body))
    }




    return <Dialogs
        addMessage={addMessage}
        changeHandler={changeHandler}
        dialogsPage={store}
        />


}
export default DialogsContainer