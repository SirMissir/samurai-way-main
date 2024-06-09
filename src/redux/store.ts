import dialogsReducer, {dialogsReducerType} from "./dialogs-reducer";
import profileReducer, {profileReducerType} from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

export type MessageType={
    id: number
    name:string
}
export type DialogType={
    id: number
    name:string
}
export type PostType={
    id:number
    message:string
    countLike:number
}
export type ProfilePageType={
    posts: Array<PostType>
    currentPostText:string
}
export type DialogsPageType={
    dialogs:Array<DialogType>
    messages:Array<MessageType>
    newMessageText: string
}
export type SidebarType={}
export type RootStateType={
    profilePage:ProfilePageType
    dialogsPage:DialogsPageType
    sidebar:SidebarType
}
export type ActionType = profileReducerType | dialogsReducerType;

export type StoreStateType={
    _state:RootStateType
    _callSubscriber: (state:RootStateType)=>void;
    getState:()=>RootStateType;
    subscribe:(observe:(state:RootStateType)=>void)=>void
    // dispatch:(action:ActionType) => void
}

let store:StoreStateType = {
    _state: {
    profilePage:{
        posts:[
            {id:1, message:'Hi,how are you',countLike:20},
            {id:2, message:"It is my first post", countLike:30},

        ],
        currentPostText: ''
    },
    dialogsPage:{
        dialogs:[
            {id:1, name:"Dimych"},
            {id:2, name:"Andrey"},
            {id:3, name:"Sveta"},
            {id:4, name:"Lera"},
            {id:5, name:"Victor"}
        ],
        messages:[
            {id:1, name:"Hi"},
            {id:2, name:"How is your it-kamasutra"},
            {id:3, name:"OK"},
            {id:4, name:"How much your learning"},
            {id:5, name:"Victor"}
        ],
        newMessageText: ''
    },
    sidebar:{}

},
    _callSubscriber() {
        console.log('State changed')
    },
    getState(){
        return this._state
    },

    subscribe(observe){
        this._callSubscriber=observe
    },
    // dispatch(action: ActionType){
    //     this._state.profilePage=profileReducer(this._state.profilePage,action);
    //     this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action);
    //     this._state.sidebar=sidebarReducer(this._state.sidebar,action);
    //     this._callSubscriber(this._state);
    //
    // },
}

export default store;
