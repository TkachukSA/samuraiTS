import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reduser";
import profileReducer from "./profile-reduser";
import saidbarReducer from "./saidbar-reduser";



const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer
})


type appStateType = ReturnType<typeof rootReducer>


const store = createStore(rootReducer)

export type StoreReduxType= typeof  store


export default store