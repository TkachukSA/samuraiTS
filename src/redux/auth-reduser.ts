import {authAPI, userApi} from "../api/api";
import {AxiosResponse} from "axios";
import {ActionPageType, setUsersProfile} from "./profile-reduser";


export type setUserDataActionType = { type: "SET-USER-DATA", data: {id: number, email: string, login: string }}

export const setAuthUserData = (id: number, email: string, login: string): setUserDataActionType => ({
    type: "SET-USER-DATA", data: {id, email, login}
})


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
            debugger
            return {...state, ...action.data,
                isAuth: true
            }
    }
    return state

}


export default authReducer

export const getAuthUserData = () => {

    return (dispatch: (action: ActionAuthType) => ActionAuthType) => {
        authAPI.me()
            .then((response) => {
                debugger
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }
}


