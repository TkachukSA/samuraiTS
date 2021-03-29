import {
    PostsTypes,
} from "./store";
import {v1} from "uuid";
import {profileAPI, userApi} from "../api/api";
import {AxiosResponse} from "axios";
import {Dispatch} from "redux";
import {setAuthUserData} from "./auth-reduser";
import {appStateType, StoreReduxType} from "./redux.store";
import {FormDataType} from "../components/profile/ProfileInfo/ProfileDataForm";


export type setUsersProfileType = {
    type: "SET_USER_PROFILE"
    profile: newProfileType
}
export type AddPostActionType = {
    type: "ADD-POST",
    value: string
}
export type setStatusActionType = {
    type: "SET_STATUS"
    status: string
}
export type updateStatusActionType = {
    type: "UPDATE_STATUS"
    status: string
}

export type ActionPageType =
    | AddPostActionType
    | setUsersProfileType
    | setStatusActionType
    | updateStatusActionType
    | ReturnType<typeof SavePhotoAC>


export type newProfileType = {
    aboutMe: string
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: string,
    photos: {
        small: string
        large: string
    }
}
export type newProfilePageType = {
    profile: newProfileType | null
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


const profileReducer = (state: newProfilePageType = initialState, action: ActionPageType): newProfilePageType => {
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

        case "UPDATE_PHOTO": {
            return {...state, profile: {...state.profile, ...action.data}}
        }
        default:
            return state
    }

}

export const addPostActoinCreator = (value: string): AddPostActionType => ({
        type: "ADD-POST", value
    }
)

export const setUsersProfile = (profile: newProfileType): setUsersProfileType => ({
    type: "SET_USER_PROFILE",
    profile
})

export const setStatus = (status: string): setStatusActionType => ({
    type: 'SET_STATUS', status
})
export const updateStatusAC = (status: string): updateStatusActionType => ({
    type: 'UPDATE_STATUS', status
})
export const SavePhotoAC = (data: any) => ({
    type: 'UPDATE_PHOTO', data
} as const)


export default profileReducer


export const getUserProfile = (userId: string | undefined) => {
    return (dispatch: (action: ActionPageType) => ActionPageType) => {
        userApi.getProfile(userId)
            .then((response: AxiosResponse<any>) => {
                dispatch(setUsersProfile(response.data))
            })
    }
}

export const getStatus = (userId: string) => {
    return (dispatch: (action: ActionPageType) => ActionPageType) => {
        profileAPI.getStatus(+userId)
            .then((response: AxiosResponse<any>) => {
                dispatch(setStatus(response.data))
            })
    }
}

export const updateStatus = (status: string) => {
    return (dispatch: (action: ActionPageType) => ActionPageType) => {
        profileAPI.updateStatus(status)
            .then((response: AxiosResponse<any>) => {
                if (response.data.resultCode === 0) {
                    dispatch(updateStatusAC(status))
                }
            })
    }
}
export const savePhoto = (status: string) => {
    return (dispatch: Dispatch<any>) => {
        profileAPI.updatePhotos(status)
            .then((response: AxiosResponse<any>) => {
                debugger
                if (response.data.resultCode === 0) {
                    debugger
                    dispatch(SavePhotoAC(response.data.data.photos))
                }
            })
    }
}
export const saveProfile = (profile: FormDataType
) => {
    debugger
    return (dispatch: Dispatch<any>, getState: () => appStateType) => {
        const state = getState()
        const apiModel = {
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: state.profilePage.profile?.lookingForAJobDescription === ''
                ? 'news'
                : state.profilePage.profile?.lookingForAJobDescription,
            fullName: profile.fullName,
            aboutMe: profile.aboutMe,
        }
        profileAPI.saveProfile(apiModel)
            .then((response: AxiosResponse<any>) => {
                if (response.data.resultCode === 0) {
                    debugger
                    dispatch(getUserProfile(state.profilePage.profile?.userId))
                }
            })
    }
}


