import React from 'react';
import {v1} from "uuid";
import {UsersType} from "../components/users/Users";

export type UsersPageType={
    users:Array<UsersType>
}
export type folowActionType = { type: "FOLLOW", userid: string  }
export type unFolowActionType = { type: "UN-FOLLOW", userid: string }
export type setUsersActionType = { type: "SETUSERS", users: Array<UsersType> }

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


export type ActionUserType= folowActionType | unFolowActionType | setUsersActionType

let initialState: UsersPageType = {
    users: []
}


const usersReducer = (state: UsersPageType = initialState, action: ActionUserType): UsersPageType => {

    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (action.userid === u.id) {
                        return {...u, folowed: true}
                    }
                    return u
                })
            }
        case "UN-FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (action.userid === u.id) {
                        return {...u, folowed: false}
                    }
                    return u
                })}
        case "SETUSERS": {
            debugger
            return {...state, users: [...state.users, ...action.users] }


    }

    }


    return state

}



export default usersReducer



