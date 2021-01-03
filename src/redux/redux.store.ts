import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reduser";
import profileReducer from "./profile-reduser";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reduser";
import ReduxThunk from 'redux-thunk'




const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPeges: usersReducer,
    auth: authReducer
})


export type appStateType = ReturnType<typeof rootReducer>


const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export type StoreReduxType= typeof  store


export default store