
import {v1} from "uuid";
import dialogsReducer, {addMessageActoinCreator, MessagePageType} from "./dialogs-reduser";

test('ADD-MESSAGE',()=>{

    const startState: MessagePageType ={
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




    const action =addMessageActoinCreator('text')
    const endState=dialogsReducer(startState, action )

    expect(startState.messages.length).toBe(5)


    expect(endState.messages.length).toBe(6)


})

