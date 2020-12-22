import React from 'react';
import {connect} from "react-redux";

import {appStateType} from "../../redux/redux.store";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toglIsFetching,
    unFolow
} from "../../redux/users-reduser";
import Users, { UsersType} from "./Users";

import axios, {AxiosResponse} from "axios";
import Preloader from "../common/Preloader";




type mapDispathToPropsType= {
    follow: (userid: string) => void
    unFolow: (userid: string) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toglIsFetching: (isFetching: boolean) => void
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
        this.props.toglIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: AxiosResponse<ResponseUsersType>) => {
                this.props.toglIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)

            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toglIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response: AxiosResponse<ResponseUsersType>) => {
                this.props.toglIsFetching(false)
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
                      UnFollow={this.props.unFolow}
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




export default connect<mapStateToPropsType,mapDispathToPropsType, {}, appStateType>( mapStateToProps, {
    follow,
    unFolow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toglIsFetching
})(UsersContainet)

