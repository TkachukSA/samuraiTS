import {
    PostsTypes,
} from "./store";
import {v1} from "uuid";


export type setUsersProfileType={
    type: "SET_USER_PROFILE"
    profile: newProfileType
}
export type AddPostActionType = {
    type: "ADD-POST"
}
export type UpdateNewPostTextType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
export type ActionPageType=UpdateNewPostTextType | AddPostActionType | setUsersProfileType

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
type newProfilePageType={
    profile:newProfileType | null
    messageForNewPost: string
    posts: Array<PostsTypes>
}




let initialState: newProfilePageType = {
    profile: null,
    messageForNewPost: "",
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
            let text = state.messageForNewPost
            let newPost: PostsTypes = {
                id: v1(),
                likekounts: 0,
                message: text
            }
            return {...state,
                posts:[...state.posts, newPost],
                messageForNewPost: ""
            }

        case "UPDATE-NEW-POST-TEXT":
            return {...state, messageForNewPost: action.newText}
        case "SET_USER_PROFILE":
         return    {...state, profile: action.profile}
        default:
            return state
    }

}

export const addPostActoinCreator = (): AddPostActionType => ({
        type: "ADD-POST"
    }
)
export const updateNewPostActionCreator = (text: string): UpdateNewPostTextType => ({
    type: "UPDATE-NEW-POST-TEXT",
    newText: text
})
export const setUsersProfile = (profile: newProfileType):setUsersProfileType => ({
    type: "SET_USER_PROFILE",
    profile
})


export default profileReducer



