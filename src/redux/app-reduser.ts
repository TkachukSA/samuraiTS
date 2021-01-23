import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import { stopSubmit } from 'redux-form';
import {AuthPageType, getAuthUserData} from "./auth-reduser";

export type initializedSucsessActionType = ReturnType<typeof initializedSucsessAction>


export const initializedSucsessAction = () => ({
        type: "INITIALIZED_SUCCESS"} as const
)



type appReducerType = {
    initialized: boolean
}

let initialState = {

    initialized: false
}


const appReducer = (state: appReducerType = initialState, action: initializedSucsessActionType): appReducerType => {

    switch (action.type) {
        case "INITIALIZED_SUCCESS":{
            return {
                ...state,
                initialized: true
            }
        }

    }
    return state

}


export default appReducer


export const initializedApp = ()=>(dispatch: Dispatch<any>)=>{
  const promise =  dispatch(getAuthUserData())

   /// promise.then(()=>{})???????????
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSucsessAction())
        })
}
