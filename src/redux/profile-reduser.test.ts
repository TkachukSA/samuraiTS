import usersReducer, {follow, UsersPageType} from "./users-reduser";
import profileReducer, {
    addPostActoinCreator,
    newProfilePageType, newProfileType,
    setUsersProfile,
    updateNewPostActionCreator
} from "./profile-reduser";
import {v1} from "uuid";

test('setUsersProfileType', () => {

    const startState: newProfilePageType = {
        profile: {
            aboutMe: " ",
            contacts: {
                facebook: '',
                website: '',
                vk: '',
                twitter: '',
                instagram: '',
                youtube: '',
                github: '',
                mainLink: '',
            },
            lookingForAJob: false,
            lookingForAJobDescription: '',
            fullName: '',
            userId: 123,
            photos: {
                small: '',
                large: '',
            },

        },
        messageForNewPost: "",
        posts: [
            {id: v1(), message: 'Hi, how are you*?', likekounts: 12},
            {id: v1(), message: 'its my first post', likekounts: 33},
        ]
    }


    const action = addPostActoinCreator()
    const endState = profileReducer(startState, action)
    endState.messageForNewPost= "Hi"

    expect(startState.posts.length).toBe(2)
    expect(startState.messageForNewPost).toBe("")

    expect(endState.posts.length).toBe(3)
    expect(endState.messageForNewPost).toBe("Hi")


})
test('UPDATE-NEW-POST-TEXT', () => {

    const startState: newProfilePageType = {
        profile: {
            aboutMe: " ",
            contacts: {
                facebook: '',
                website: '',
                vk: '',
                twitter: '',
                instagram: '',
                youtube: '',
                github: '',
                mainLink: '',
            },
            lookingForAJob: false,
            lookingForAJobDescription: '',
            fullName: '',
            userId: 123,
            photos: {
                small: '',
                large: '',
            },

        },
        messageForNewPost: "",
        posts: [
            {id: v1(), message: 'Hi, how are you*?', likekounts: 12},
            {id: v1(), message: 'its my first post', likekounts: 33},
        ]
    }


    const action = updateNewPostActionCreator('Good night')
    const endState = profileReducer(startState, action)


    expect(startState.posts.length).toBe(2)
    expect(startState.messageForNewPost).toBe("")

    expect(endState.messageForNewPost).toBe('Good night')



})
test('SET_USER_PROFILE', () => {

    const startState: newProfilePageType = {
        profile: {
            aboutMe: " ",
            contacts: {
                facebook: '',
                website: '',
                vk: '',
                twitter: '',
                instagram: '',
                youtube: '',
                github: '',
                mainLink: '',
            },
            lookingForAJob: false,
            lookingForAJobDescription: '',
            fullName: '',
            userId: 123,
            photos: {
                small: '',
                large: '',
            },

        },
        messageForNewPost: "",
        posts: [
            {id: v1(), message: 'Hi, how are you*?', likekounts: 12},
            {id: v1(), message: 'its my first post', likekounts: 33},
        ]
    }

    const newState: newProfileType = {

            aboutMe: " ",
            contacts: {
                facebook: '',
                website: '',
                vk: '',
                twitter: '',
                instagram: '',
                youtube: '',
                github: '',
                mainLink: '',
            },
            lookingForAJob: false,
            lookingForAJobDescription: '',
            fullName: 'Garry',
            userId: 22111,
            photos: {
                small: '',
                large: '',
            },


    }


    const action = setUsersProfile(newState)
    const endState = profileReducer(startState, action)


    expect(startState.profile?.fullName).toBe('')
    expect(startState.profile?.userId).toBe(123)

    expect(endState.profile?.userId).toBe(22111)
    expect(endState.profile?.fullName).toBe('Garry')



})