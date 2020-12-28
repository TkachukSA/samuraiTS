


export type setUserDataActionType = { type: "SET-USER-DATA", id: number, email: string , login: string }

export const setAuthUserData = (id: number, email: string, login: string):setUserDataActionType => ({
        type: "SET-USER-DATA", id, email, login
    })



export type ActionAuthType= setUserDataActionType



export type AuthPageType={
    id: number | null
    email: string | null
    login: string |null
    isAuth: boolean
}



let initialState :AuthPageType = {

        id: null,
        email: null,
        login: null,
       isAuth: false
}


const authReducer = (state: AuthPageType  = initialState, action: ActionAuthType): AuthPageType => {

    switch (action.type) {
        case "SET-USER-DATA":
            return {...state,
                ...action,
                isAuth: true
            }
    }
    return state

}



export default authReducer



