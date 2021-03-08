import React from 'react';
import {connect} from "react-redux";
import {appStateType} from "../../redux/redux.store";
import {
     FolluwThunk,
    getUsersThunk,
    setCurrentPage,
    setTotalUsersCount,
    toglIsFetching,
    unFolluwThunk,
} from "../../redux/users-reduser";
import Users, {UsersType} from "./Users";
import Preloader from "../common/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPageS,
    getFolowingInProgressS,
    getIsFetchingS,
    getPageSizeS,
    getTotalCountS,
    getUsersS
} from "../../redux/user-selectors";



export type mapDispathToPropsType = {
    //  follow: (userid: string) => void
    //  unFolow: (userid: string) => void
    //setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toglIsFetching: (isFetching: boolean) => void
    // toglFolowingInProgress: (isFetching: boolean, userId: string) => void
    getUsersThunk: (currentPage: number, pageSize: number) => void
    unFolluwThunk: (userId: string) => void
    FolluwThunk: (userId: string) => void

}

type mapStateToPropsType = {
    users: any
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    folowingInProgress: Array<string>
}

export type ResponseUsersType = {
    error: any
    items: Array<UsersType>
    totalCount: number
}
export type UsersPropsType = mapStateToPropsType & mapDispathToPropsType


class UsersContainet extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)

    }

    onPageChanged = (pageNumber: number) => {

        this.props.getUsersThunk(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null
            }
            <Users
                // setUsers={this.props.setUsers}
                //  setCurrentPage={this.props.setCurrentPage}
                //follow={this.props.follow}
                //UnFollow={this.props.unFolow}
                //  toglFolowingInProgress={this.props.toglFolowingInProgress}
                folowingInProgres={this.props.folowingInProgress}
                unFolluwThunk={this.props.unFolluwThunk}
                FolluwThunk={this.props.FolluwThunk}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                totalCount={this.props.totalCount}
                setTotalUsersCount={this.props.setTotalUsersCount}
                onPageChanged={this.onPageChanged}
                users={this.props.users}


            />
        </>
    }
}


let mapStateToProps = (state: appStateType) => {
    return {
        users: getUsersS(state),
        pageSize: getPageSizeS(state),
        totalCount: getTotalCountS(state),
        currentPage: getCurrentPageS(state),
        isFetching: getIsFetchingS(state),
        folowingInProgress: getFolowingInProgressS(state)
    }
}


export default compose(/*withAuthRedirect*/connect<mapStateToPropsType, mapDispathToPropsType, {}, appStateType>(mapStateToProps, {
    setCurrentPage,
    setTotalUsersCount,
    toglIsFetching,
    getUsersThunk,
    unFolluwThunk,
    FolluwThunk
}))(UsersContainet)



/*const  withRedirect = withAuthRedirect(UsersContainet)


export default connect<mapStateToPropsType, mapDispathToPropsType, {}, appStateType>(mapStateToProps, {
    setCurrentPage,
    setTotalUsersCount,
    toglIsFetching,
    getUsersThunk,
    unFolluwThunk,
    FolluwThunk
})(withRedirect)*/