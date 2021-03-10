import {UsersType} from "../components/users/Users";
import usersReducer, {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toglIsFetching,
    unFolow,
    UsersPageType
} from "./users-reduser";

test('folowAC', () => {

    const startState: UsersPageType = {
        users: [{
            name: 'SA',
            id: "2502",
            followed: false,
            uniqueUrlName: null,
            status: "is active",
            photos: {
                small: "string",
                large: "string"
            },
            location: {
                contry: "UAE",
                city: "DUMAI"
            },
        }],
        folowingInProgress: [],
        currentPage: 1,
        pageSize: 2,
        isFetching: true,
        totalCount: 100

    }

    const action = follow("2502")
    const endState = usersReducer(startState, action)

    expect(endState.users[0].followed).toBe(true)


})
test('unFolowAC', () => {

    const startState: UsersPageType = {
        users: [{
            name: 'SA',
            id: "2502",
            followed: false,
            uniqueUrlName: null,
            status: "is active",
            photos: {
                small: "string",
                large: "string"
            },
            location: {
                contry: "UAE",
                city: "DUMAI"
            },
        }],
        folowingInProgress: [],
        currentPage: 1,
        pageSize: 2,
        isFetching: true,
        totalCount: 100


    }

    const action = unFolow("2502")
    const endState = usersReducer(startState, action)

    expect(endState.users[0].followed).toBe(false)


})
test('SETUSERS', () => {

    const startState: UsersPageType = {
        users: [{
            name: 'SA',
            id: "2502",
            followed: false,
            uniqueUrlName: null,
            status: "is active",
            photos: {
                small: "string",
                large: "string"
            },
            location: {
                contry: "UAE",
                city: "DUMAI"
            },
        }],
        folowingInProgress: [],
        currentPage: 1,
        pageSize: 2,
        isFetching: true,
        totalCount: 100

    }
    const newState: Array<UsersType> = [{

        name: 'Frank',
        id: "0704",
        followed: true,
        uniqueUrlName: null,
        status: "is active",
        photos: {
            small: "string",
            large: "string"
        },
        location: {
            contry: "BLR",
            city: "Minsk"
        },

    }]


    const action = setUsers(newState)
    const endState = usersReducer(startState, action)
    expect(startState.users.length).toBe(1)

    expect(endState.users[0].name).toBe('Frank')
    /*    expect(endState.users[1].name).toBe('SA')*/
    expect(endState.users.length).toBe(1)


})
test('SET-CURRENT-PAGE', () => {

    const startState = {
        users: [{
            name: 'SA',
            id: "2502",
            followed: true,
            uniqueUrlName: null,
            status: "is active",
            photos: {
                small: "string",
                large: "string"
            },
            location: {
                contry: "UAE",
                city: "DUMAI"
            },
        }],

        pageSize: 1,
        currentPage: 1,
        isFetching: true,
        totalCount: 100
    }
    const newState = {
        users: [{
            name: 'NN',
            id: "9911",
            followed: false,
            uniqueUrlName: null,
            status: "is active",
            photos: {
                small: "string",
                large: "string"
            },
            location: {
                contry: "USA",
                city: "LA"
            },
        }],

        pageSize: 1,
        currentPage: 6,
        isFetching: true,
        totalCount: 100
    }


    const action = setCurrentPage(6)
    const endState = usersReducer(startState, action)
    expect(startState.currentPage).toBe(1)


    expect(endState.currentPage).toBe(6)


})
test('SET-TOTAL-USERS-COUNT', () => {

    const startState = {
        users: [{
            name: 'SA',
            id: "2502",
            followed: true,
            uniqueUrlName: null,
            status: "is active",
            photos: {
                small: "string",
                large: "string"
            },
            location: {
                contry: "UAE",
                city: "DUMAI"
            },
        }],

        pageSize: 1,
        currentPage: 1,
        isFetching: true,
        totalCount: 100
    }
    const newState = {
        users: [{
            name: 'NN',
            id: "9911",
            followed: false,
            uniqueUrlName: null,
            status: "is active",
            photos: {
                small: "string",
                large: "string"
            },
            location: {
                contry: "USA",
                city: "LA"
            },
        }],

        pageSize: 1,
        currentPage: 6,
        isFetching: true,
        totalCount: 100
    }


    const action = setTotalUsersCount(1000)
    const endState = usersReducer(startState, action)

    expect(startState.totalCount).toBe(100)


    expect(endState.totalCount).toBe(1000)


})
test('TOGL-IDFETCHING', () => {

    const startState = {
        users: [{
            name: 'SA',
            id: "2502",
            followed: true,
            uniqueUrlName: null,
            status: "is active",
            photos: {
                small: "string",
                large: "string"
            },
            location: {
                contry: "UAE",
                city: "DUMAI"
            },
        }],

        pageSize: 1,
        currentPage: 1,
        isFetching: true,
        totalCount: 100
    }


    const action = toglIsFetching(false)
    const endState = usersReducer(startState, action)

    expect(startState.isFetching).toBe(true)


    expect(endState.isFetching).toBe(false)


})