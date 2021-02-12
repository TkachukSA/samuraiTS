import {applyMiddleware, combineReducers, createStore} from "redux";
import { reducer as formReducer } from 'redux-form'
import dialogsReducer from "./dialogs-reduser";
import profileReducer from "./profile-reduser";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reduser";
import thunk from 'redux-thunk'
import appReducer from "./app-reduser";




const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPeges: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})


export type appStateType = ReturnType<typeof rootReducer>


const store = createStore(rootReducer, applyMiddleware(thunk))

export type StoreReduxType= typeof  store


export default store