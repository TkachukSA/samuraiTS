import React from 'react';
import {connect} from "react-redux";

import {appStateType} from "../../redux/redux.store";
import {
    ActionUserType,
    folowAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, toglIsFetchingAC,
    unFolowAC
} from "../../redux/users-reduser";
import Users, { UsersType} from "./Users";
import loader from '../../assets/loading/loader.gif'
import axios, {AxiosResponse} from "axios";
import Preloader from "../common/Preloader";




type mapDispathToPropsType= {
    follow: (userid: string) => void
    UnFollow: (userid: string) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toglIsFetchingAC: (isFetching: boolean) => void
}

type mapStateToPropsType ={
    users: any
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}

type ResponseUsersType = {
    error: any
    items: Array<UsersType>
    totalCount: number
}
export type UsersPropsType=mapStateToPropsType & mapDispathToPropsType




class UsersContainet extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toglIsFetchingAC(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: AxiosResponse<ResponseUsersType>) => {
                this.props.toglIsFetchingAC(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)

            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toglIsFetchingAC(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response: AxiosResponse<ResponseUsersType>) => {
                this.props.toglIsFetchingAC(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }
    render() {
        return <>
            {this.props.isFetching? <Preloader/>: null
                }
        <Users users={this.props.users}
                      follow={this.props.follow}
                      UnFollow={this.props.UnFollow}
                      setUsers={this.props.setUsers}
                      setTotalUsersCount={this.props.setTotalUsersCount}
                      setCurrentPage={this.props.setCurrentPage}
                      pageSize={this.props.pageSize}
                      totalCount={this.props.totalCount}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
        />
        </>
    }
}


let mapStateToProps=(state:appStateType)=>{
    return {
        users: state.usersPeges.users,
        pageSize: state.usersPeges.pageSize,
        totalCount: state.usersPeges.totalCount,
        currentPage: state.usersPeges.currentPage,
        isFetching: state.usersPeges.isFetching
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
        },
        toglIsFetchingAC: (isFetching: boolean)=>{
            dispatch(toglIsFetchingAC(isFetching))
        }

    }
}

export default connect<mapStateToPropsType,mapDispathToPropsType, {}, appStateType>( mapStateToProps, mapDispathToProps)(UsersContainet)

