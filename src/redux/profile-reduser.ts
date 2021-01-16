import {
    PostsTypes,
} from "./store";
import {v1} from "uuid";
import {profileAPI, userApi} from "../api/api";
import {AxiosResponse} from "axios";


export type setUsersProfileType={
    type: "SET_USER_PROFILE"
    profile: newProfileType
}
export type AddPostActionType = {
    type: "ADD-POST",
    value:string
}

export type setStatusActionType = {
    type: "SET_STATUS"
    status: string
}
export type updateStatusActionType = {
    type: "UPDATE_STATUS"
    status: string
}
export type ActionPageType= AddPostActionType | setUsersProfileType | setStatusActionType|updateStatusActionType

export type newProfileType={
    aboutMe: string
    contacts:{
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null

        youtube:  string | null
        github: string | null
        mainLink: string | null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string
        large: string
    }
}
export type newProfilePageType={
    profile:newProfileType | null

    posts: Array<PostsTypes>
    status: string
}




let initialState: newProfilePageType = {
    profile: null,
    status: '',
    posts: [
        {id: v1(), message: 'Hi, how are you*?', likekounts: 12},
        {id: v1(), message: 'its my first post', likekounts: 33},
        {id: v1(), message: 'go in iron', likekounts: 333},
        {id: v1(), message: 'its my life', likekounts: 333}
    ],
}


const profileReducer = (state: newProfilePageType = initialState, action: ActionPageType ): newProfilePageType => {

    switch (action.type) {
        case "ADD-POST":
            let text = action.value
            let newPost: PostsTypes = {
                id: v1(),
                likekounts: 0,
                message: text
            }
            return {
                ...state,
                posts: [...state.posts, newPost],


            }

        case "SET_USER_PROFILE":
            return {...state, profile: action.profile}

        case "SET_STATUS":
            return {...state, status: action.status}
        case "UPDATE_STATUS":
            return {...state, status: action.status}
        default:
            return state
    }

}

export const addPostActoinCreator = (value:string): AddPostActionType => ({
        type: "ADD-POST", value
    }
)

export const setUsersProfile = (profile: newProfileType):setUsersProfileType => ({
    type: "SET_USER_PROFILE",
    profile
})

export const setStatus = (status :string): setStatusActionType => ({
  type: 'SET_STATUS', status
})
export const updateStatusAC = (status :string): updateStatusActionType => ({
  type: 'UPDATE_STATUS', status
})


export default profileReducer


export const getUserProfile=(userId: string)=>{

    return (dispatch: (action: ActionPageType)=> ActionPageType )=>{

        userApi.getProfile(+userId)
            .then((response: AxiosResponse<any>) => {
                dispatch(setUsersProfile(response.data))
            })
    }
}

export const getStatus=(userId: string)=>{
    return (dispatch: (action: ActionPageType)=> ActionPageType )=>{
        profileAPI.getStatus(+userId)
            .then((response: AxiosResponse<any>) => {
                dispatch(setStatus(response.data))
            })
    }
}

export const updateStatus= (status: string)=>{
    return (dispatch: (action: ActionPageType)=> ActionPageType )=>{
        profileAPI.updateStatus(status)
            .then((response: AxiosResponse<any>) => {
                if(response.data.resultCode===0){
                dispatch(updateStatusAC(status))}
            })
    }
}



