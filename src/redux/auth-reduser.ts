import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from 'redux-form';

//export type setUserDataActionType = { type: "SET-USER-DATA", data: {id: number | null, email: string, login: string ,isAuth: boolean }}
export type setUserDataActionType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (data: AuthPageType) => ({type: "SET-USER-DATA", data} as const)


export type ActionAuthType = setUserDataActionType


export type AuthPageType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}


let initialState: AuthPageType = {

    id: null,
    email: null,
    login: null,
    isAuth: false
}


const authReducer = (state: AuthPageType = initialState, action: ActionAuthType): AuthPageType => {

    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.data}
    }
    return state

}


export default authReducer

export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.me()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserData({id, email, login, isAuth: true}))
                }
            })
    }
}


export const loginTC = (email: string, password: string, rememberMe: boolean) => {

    return (dispatch: Dispatch<any>) => {


        authAPI.login(email, password, rememberMe)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
                    dispatch(stopSubmit("login", {_error: message}))
                }
            })
    }
}

export const logoutTC = () => {
    return (dispatch: Dispatch<any>) => {
        authAPI.logout()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData({login: null, id: null, email: null, isAuth: false}))
                }
            })
    }
}
