import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {MessagePageType} from "../../redux/dialogs-reduser";
import { Redirect } from 'react-router-dom';






type DialogsType = {
    dialogsPage: MessagePageType
    addMessage: ()=> void
    changeHandler:(body: any)=> void
    isAuth: boolean
}

const Dialogs = (props: DialogsType) => {

if(!props.isAuth) return <Redirect to={"/login"}/>

    const addMessage = ()=>{
        props.addMessage()
    }
    const changeHandler =(event: ChangeEvent<HTMLTextAreaElement>)=>{
        const body = event.currentTarget.value
        props.changeHandler(body)
    }


    let messageElements = props.dialogsPage.messages.map((m) => <Message message={m.message} key={m.id}/>)
    let dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItem id={d.id} name={d.name} key={d.id}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div> {messageElements}</div>
                <div>
                    <div> <textarea placeholder="Enter your message"
                                    onChange={changeHandler}
                                    value={props.dialogsPage.messagesForMessages}/>
                    </div>
                    <div> <button onClick={addMessage}>add message</button> </div>
                </div>

            </div>
        </div>

    )
}
export default Dialogs