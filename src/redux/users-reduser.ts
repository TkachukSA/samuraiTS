import {UsersType} from "../components/users/Users";


export type UsersPageType={
    users:Array<UsersType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}
export type folowActionType = { type: "FOLLOW", userid: string  }
export type unFolowActionType = { type: "UN-FOLLOW", userid: string }
export type setUsersActionType = { type: "SETUSERS", users: Array<UsersType> }

export type setCurrentPageActionType = { type: "SET-CURRENT-PAGE", currentPage: number}
export type setTotalUsersCountActionType = { type: "SET-TOTAL-USERS-COUNT", totalCount: number }
export type toglIsFetchingActionType = { type: "TOGL-IDFETCHING", isFetching: boolean }

export const follow = (userid: string):folowActionType => ({
        type: "FOLLOW",
        userid: userid
    })
export const unFolow = (userid: string): unFolowActionType => ({
        type: "UN-FOLLOW",
        userid: userid
    })
export const setUsers = (users: Array<UsersType>): setUsersActionType => ({
        type: "SETUSERS",
        users: users
    })


export const setCurrentPage = (currentPage: number): setCurrentPageActionType => ({
        type: "SET-CURRENT-PAGE",
        currentPage: currentPage
    })
export const setTotalUsersCount = (totalCount: number): setTotalUsersCountActionType => ({
        type: "SET-TOTAL-USERS-COUNT",
    totalCount: totalCount
    })
export const toglIsFetching = (isFetching: boolean): toglIsFetchingActionType => ({
        type: "TOGL-IDFETCHING",
    isFetching: isFetching
    })


export type ActionUserType= folowActionType
    | unFolowActionType
    | setUsersActionType
    | setCurrentPageActionType
    | setTotalUsersCountActionType
    | toglIsFetchingActionType


let initialState: UsersPageType  = {
    users: [],
    pageSize: 5,
    totalCount: 100,
    currentPage: 1,
    isFetching: false
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
            return {...state, totalCount: action.totalCount}
        }
        case "TOGL-IDFETCHING":{
            return {...state, isFetching: action.isFetching}
        }

    }


    return state

}



export default usersReducer



