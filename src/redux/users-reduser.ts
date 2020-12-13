import {UsersType} from "../components/users/Users";


export type UsersPageType={
    users:Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export type folowActionType = { type: "FOLLOW", userid: string  }
export type unFolowActionType = { type: "UN-FOLLOW", userid: string }
export type setUsersActionType = { type: "SETUSERS", users: Array<UsersType> }

export type setCurrentPageActionType = { type: "SET-CURRENT-PAGE", currentPage: number}
export type setTotalUsersCountActionType = {
    type: "SET-TOTAL-USERS-COUNT", totalUsersCount: number }

export const folowAC = (userid: string):folowActionType => ({
        type: "FOLLOW",
        userid: userid
    })
export const unFolowAC = (userid: string): unFolowActionType => ({
        type: "UN-FOLLOW",
        userid: userid
    })
export const setUsersAC = (users: Array<UsersType>): setUsersActionType => ({
        type: "SETUSERS",
        users: users
    })

export const setCurrentPageAC = (currentPage: number): setCurrentPageActionType => ({
        type: "SET-CURRENT-PAGE",
        currentPage: currentPage
    })
export const setTotalUsersCountAC = (totalUsersCount: number): setTotalUsersCountActionType => ({
        type: "SET-TOTAL-USERS-COUNT",
    totalUsersCount: totalUsersCount
    })


export type ActionUserType= folowActionType
    | unFolowActionType
    | setUsersActionType
    | setCurrentPageActionType
    | setTotalUsersCountActionType


let initialState: UsersPageType  = {
    users: [],
    pageSize: 5,
    totalUsersCount: 100,
    currentPage: 2
}


const usersReducer = (state: UsersPageType  = initialState, action: ActionUserType): UsersPageType => {

    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (action.userid === u.id) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case "UN-FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (action.userid === u.id) {
                        return {...u, followed: false}
                    }
                    return u
                })}
        case "SETUSERS": {
            return {...state, users: action.users }
    }
        case "SET-CURRENT-PAGE":{
            return {...state, currentPage: action.currentPage}
        }
        case "SET-TOTAL-USERS-COUNT":{
            return {...state, totalUsersCount: action.totalUsersCount}
        }

    }


    return state

}



export default usersReducer



