import React from 'react';
import Paginator from "../common/paginator/Paginator";
import User from "./User";


export type UsersType = {
    name: string
    id: string
    followed: boolean
    uniqueUrlName: null | string
    status: string | null
    photos: {
        small: string | null,
        large: string | null
    }
    location: {
        contry: string
        city: string
    }
}

export type UsersPropsType = {
    users: Array<UsersType>
    setTotalUsersCount: (totalCount: number) => void
    onPageChanged: (pageNumber: number) => void
    pageSize: number
    totalCount: number
    currentPage: number
    folowingInProgres: Array<string>
    unFolluwThunk: (userId: string) => void
    FolluwThunk: (userId: string) => void
}


function Users(props: UsersPropsType) {

    return <div>
        <Paginator onPageChanged={props.onPageChanged}
                   currentPage={props.currentPage}
                   pageSize={props.pageSize}
                   totalCount={props.totalCount}
                   users={props.users}
        />
        <User users={props.users}
              FolluwThunk={props.FolluwThunk}
              folowingInProgres={props.folowingInProgres}
              unFolluwThunk={props.unFolluwThunk}
        />
    </div>
}


export default Users