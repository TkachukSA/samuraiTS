import React from 'react';
import {v1} from "uuid";

type UsersType={
    id: string
    folowed: boolean
    fullName: string
    status: string
    location: {
        contry: string
        city: string
    }
}
type UsersPageType={
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
    users: [
        {id: v1(), folowed: false ,fullName: 'Serey Tkachuk', status: 'i am fine', location:{contry: 'Usa', city: "New York"}},
        {id: v1(), folowed: false, fullName: 'Serey ', status: 'i love America', location:{contry: 'Usa', city: "Bruklin"}},
        {id: v1(), folowed: false, fullName: 'Nastia ', status: 'i am fine', location:{contry: 'Usa', city: "New York"}},

    ],
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
            return {...state, users: [...state.users, ...action.users] }


    }

    }


    return state

}



export default usersReducer



