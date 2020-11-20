import React, {ChangeEvent, useState} from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {ChangeAllAddText, messagePageType, stateType} from "../../redux/state";

type DialogsType ={
    dialogsPage: messagePageType
 //   addMessage: (postMessage: string) => void
    dispatch: (action: ChangeAllAddText)=>void
}

const Dialogs = (props: DialogsType) => {
    const [valueTextArea, setValueTextArea] = useState("")

    let AddMessage = () =>{
       // props.addMessage(valueTextArea)
        props.dispatch({type: "ADD-MESSAGE", postMessage: valueTextArea})
        setValueTextArea("")
    }

 let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

     setValueTextArea(e.currentTarget.value)
 }



    let messageElements = props.dialogsPage.messages.map((m) =><Message message={m.message}/> )
    let dialogsElements = props.dialogsPage.dialogs.map((d) =><DialogItem id={d.id} name={d.name}/> )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messageElements}
               <div> <textarea onChange={onMessageChange}
                               value={valueTextArea} />
                   <button onClick={AddMessage}>add message</button>
               </div>

            </div>
        </div>

    )
}
export default Dialogs