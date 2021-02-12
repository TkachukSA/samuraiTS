import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {MessagePageType} from "../../redux/dialogs-reduser";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength, required} from "../../utils/validators/validators";
import {TextArea} from "../common/formsControl/FormsControl";


export type DialogsType = {
    dialogsPage: MessagePageType
    addMessage: (value: string) => void
    changeHandler: (body: any) => void
    // isAuth: boolean
}

const Dialogs = (props: DialogsType) => {

    /*if(!props.isAuth) return <Redirect to={"/login"}/>*/

    /*const addMessage = ()=>{
        props.addMessage()
    }*/
    const changeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const body = event.currentTarget.value
        props.changeHandler(body)
    }


    let messageElements = props.dialogsPage.messages.map((m) => <Message message={m.message} key={m.id}/>)
    let dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItem id={d.id} name={d.name} key={d.id}/>)


    const onSubmit = (formData: FormDataType) => {
        console.log(formData.newMessageBody)
        props.addMessage(formData.newMessageBody)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div> {messageElements}</div>
                <AddMessageReduxForm onSubmit={onSubmit}/>


            </div>
        </div>

    )
}
export default Dialogs

type FormDataType = {
    newMessageBody: string
}
const maxLength10=maxLength(10)
const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter your message'} validate={[maxLength10, required]} name={'newMessageBody'} component={TextArea}/>
            </div>
            <div>
                <button>add message</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm<FormDataType>({form: "AddMessageForm"})(AddMessageForm)