import {authAPI, securityAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from 'redux-form';

export type setUserDataActionType = ReturnType<typeof setAuthUserData>
export type ActionAuthType = setUserDataActionType | ReturnType<typeof getCapthaUrlAC>
export type AuthPageType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captcha?: string | null
}

export const setAuthUserData = (data: AuthPageType) => ({type: "SET-USER-DATA", data} as const)
export const getCapthaUrlAC = (url: string) => ({type: "GET-CAPHA-URL", url} as const)


let initialState: AuthPageType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null
}


const authReducer = (state: AuthPageType = initialState, action: ActionAuthType): AuthPageType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.data}
        case "GET-CAPHA-URL": {
            return {...state, captcha: action.url}
        }
    }
    return state

}


export default authReducer

export const getCaphaTC = () => {
    return (dispatch: Dispatch) => {
        securityAPI.getCaptha()
            .then((response) => {
                dispatch(getCapthaUrlAC(response.data.url))
            })
    }
}
export const getAuthUserData = () => {
    return (dispatch: Dispatch<any>) => {
        authAPI.me()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserData({id, email, login, isAuth: true}))
                    // dispatch(getAuthUserData())
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
                    dispatch(stopSubmit("login", {_error: message}))
                }
            })
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean, captcha: null | string | undefined) => {
    return (dispatch: Dispatch<any>) => {
        authAPI.login(email, password, rememberMe, captcha)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                    if (response.data.resultCode === 10) {
                        dispatch(getCaphaTC())
                    }
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
