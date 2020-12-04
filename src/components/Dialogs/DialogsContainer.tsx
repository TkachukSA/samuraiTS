import React, {ChangeEvent} from 'react';import {ChangeAllAddText, MessagePageType, stateType, StroreType} from "../../redux/store";
import {addMessageActoinCreator, UpdateNewMessageCreator} from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import {appStateType, StoreReduxType} from "../../redux/redux.store";
import {connect} from "react-redux";





/*type DialogsType = {
    store?: StoreReduxType
}*/

type mapDispathToPropsType={
    addMessage: ()=>void
    changeHandler: (body: any)=>void
}
/*const DialogsContainer = (props: DialogsType) => {


    return (
        <StoreContext.Consumer>{
            (store)=>{
                //const store = props.store.getState().dialogsPage
                const state= store.getState()

                const addMessage = ()=>{
                    if (state.dialogsPage.messagesForMessages.trim()) {
                        store.dispatch(addMessageActoinCreator(state.dialogsPage.messagesForMessages))
                    } else {
                        store.dispatch(UpdateNewMessageCreator(""))
                    }
                }
                const changeHandler =(body: any)=>{
                    store.dispatch(UpdateNewMessageCreator(body))
                }


         return   <Dialogs
                addMessage={addMessage}
                changeHandler={changeHandler}
                dialogsPage={state.dialogsPage}
            />}}
        </StoreContext.Consumer>

)

}*/

let mapStateToProps=(state:appStateType)=>{
    return{
        dialogsPage: state.dialogsPage
    }

}

let mapDispathToProps=(dispatch:(action: ChangeAllAddText) => void ):mapDispathToPropsType=>{
    return{
        addMessage: ()=>{ dispatch(addMessageActoinCreator())},
        changeHandler: (body: any)=>{dispatch(UpdateNewMessageCreator(body))}
    }}



const DialogsContainer=connect(mapStateToProps,mapDispathToProps)(Dialogs)




export default DialogsContainer