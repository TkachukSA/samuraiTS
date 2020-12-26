import {MessagePageType} from "./store";
import {v1} from "uuid";
import dialogsReducer, {addMessageActoinCreator} from "./dialogs-reduser";
import authReducer, {AuthPageType, setAuthUserData} from "./auth-reduser";

test('ADD-MESSAGE',()=>{

    const startState:AuthPageType={
        id: 11,
        email: '',
        login:'asa',
        isAuth: false
    }




    const action =setAuthUserData(1010,'gmail', 'pop121')
    const endState=authReducer(startState, action )

    expect(startState).toEqual({
        id: 11,
        email: '',
        login:'asa',
        isAuth: false
    })


    expect(endState.isAuth).toBe(true)
    expect(endState.id).toBe(1010)
    expect(endState.login).toBe("pop121")



})
