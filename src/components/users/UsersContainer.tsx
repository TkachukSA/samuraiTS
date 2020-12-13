import React from 'react';
import {connect} from "react-redux";

import {appStateType} from "../../redux/redux.store";
import {
    ActionUserType,
    folowAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFolowAC
} from "../../redux/users-reduser";
import {UsersType} from "./Users";
import Users from "./Users";




type mapDispathToPropsType={
    follow: (userid: string)=>void
    UnFollow: (userid: string)=> void
    setUsers: (users: Array<UsersType>)=>void
    setCurrentPage: (pageNumber: number)=>void
    setTotalUsersCount:(totalCount: number)=>void
}


let mapStateToProps=(state:appStateType)=>{
    return {
        users: state.usersPeges.users,
        pageSize: state.usersPeges.pageSize,
        totalUsersCount: state.usersPeges.totalUsersCount,
        currentPage: state.usersPeges.currentPage
    }
}



let mapDispathToProps=(dispatch:(action: ActionUserType) => void ):mapDispathToPropsType=>{
    return{
        follow: (userid: string)=>{
            dispatch(folowAC(userid))
        },
        UnFollow: (userid: string)=>{
            dispatch(unFolowAC(userid))
        },
        setUsers: (users: Array<UsersType>)=>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number)=>{
            dispatch(setCurrentPageAC(pageNumber))

        },
        setTotalUsersCount:(totalCount: number)=>{
            dispatch(setTotalUsersCountAC(totalCount))
        }

    }
}

let UsersContainet = connect<{},mapDispathToPropsType, {}, appStateType>( mapStateToProps, mapDispathToProps)(Users)


export default UsersContainet