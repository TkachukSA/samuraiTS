

import authReducer, {AuthPageType, setAuthUserData} from "./auth-reduser";

test('isAuth',()=>{

    const startState:AuthPageType={
        id: 11,
        email: '',
        login:'asa',
        isAuth: false
    }

    const newState:AuthPageType={
        id: 1,
        email: 'qwerty',
        login:'pop',
        isAuth: true
    }

    const action =setAuthUserData(newState)
    const endState=authReducer(startState, action )


    expect(endState).toStrictEqual({id: 1,
        email: 'qwerty',
        login:'pop',
        isAuth: true})


    expect(endState.isAuth).toBe(true)

    expect(endState.login).toBe("pop")



})
