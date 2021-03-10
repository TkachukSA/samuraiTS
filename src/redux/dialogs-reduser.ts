import {
    addMessageActoinCreatorType,
    ChangeAllAddText,
} from "./store";
import {v1} from "uuid";



export type MessagesType = {
    id: string
    message: string
}
export type dialogsType = {
    id: string
    name: string
}

export type MessagePageType = {
    dialogs: Array<dialogsType>
    messages: Array<MessagesType>
}

export const addMessageActoinCreator = (value: string):addMessageActoinCreatorType => ({
    type: "ADD-MESSAGE", value})



let initialState:MessagePageType ={
    dialogs: [
        {id: v1(), name: "Nastya"},
        {id: v1(), name: "Vlad"},
        {id: v1(), name: "Vika"},
        {id: v1(), name: "Andrey"},
        {id: v1(), name: "Vasia"}
    ],
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
            let text = action.value
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: text}],
            }

        default:
            return state
    }

}

export default dialogsReducer