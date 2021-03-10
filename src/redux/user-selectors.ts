import {appStateType} from "./redux.store";


export const getUsersS = (state: appStateType)=>{
    return  state.usersPeges.users
}
/*export const getUsersSelector = createSelector(getUsersS,(...arg)=>{
    return  users
})*/
export const getPageSizeS = (state: appStateType)=>{
    return  state.usersPeges.pageSize
}
export const getTotalCountS = (state: appStateType)=>{
    return  state.usersPeges.totalCount
}

export const getCurrentPageS = (state: appStateType)=>{
    return  state.usersPeges.currentPage
}
export const getIsFetchingS = (state: appStateType)=>{
    return  state.usersPeges.isFetching
}
export const getFolowingInProgressS = (state: appStateType)=>{
    return  state.usersPeges.folowingInProgress
}