import profileReducer, {addPostAC, newPostTextAC} from "./profile-reducer";
import dialogsReducer, {addMessageAC, newMessageTextAC} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {combineReducers, legacy_createStore as createStore, Store} from 'redux'
import usersReducer, {followAC, setUsersAC, unfollowAC} from "./users-reducer";


export type ActionsTypes = ReturnType<typeof addMessageAC>
    |ReturnType<typeof newMessageTextAC>
    |ReturnType<typeof addPostAC>
    |ReturnType<typeof newPostTextAC>
    |ReturnType<typeof followAC>
    |ReturnType<typeof unfollowAC>
    |ReturnType<typeof setUsersAC>



const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage  : usersReducer
})

export type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
export type StoreType = Store<AppStateType,ActionsTypes>

export const store: StoreType  = createStore(rootReducer)




// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store

export default store;