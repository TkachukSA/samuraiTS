import React from 'react';
import {connect} from "react-redux";
import Users, {UsersType} from "./Users";
import {appStateType} from "../../redux/redux.store";
import {ActionUserType, folowAC, setUsersAC, unFolowAC} from "../../redux/users-reduser";



type tets ={
    users: any
}
type mapDispathToPropsType={
    follow: (userid: string)=>void
    UnFollow: (userid: string)=> void
    setUsers: (users: Array<UsersType>)=>void
}


let mapStateToProps=(state:appStateType):tets=>{
    return {
        users: state.usersPeges.users
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
        }

    }
}

let UsersContainet = connect<tets,mapDispathToPropsType, {}, appStateType>( mapStateToProps, mapDispathToProps)(Users)


export default UsersContainet