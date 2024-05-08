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
    postMessage:string
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

export type StoreStateType={
    _state:RootStateType
    _rerenderEntireTree: (state:RootStateType)=>void;
    getState:()=>RootStateType;
    subscribe:(observe:(state:RootStateType)=>void)=>void
    dispatch:(action:ActionsTypes) => void
}
type AddPostActionType={
    type:'ADD-POST',
    postMessage:string
}
type ChangeNewTextActionType={
    type:'UPDATE-NEW-POST-TEXT',
    newText:string
}
type AddMessageActionType={
    type:'ADD-MESSAGE',
    postMessage:string
}
type ChangeNewMessageActionType={
    type:'UPDATE-NEW-MESSAGE-TEXT',
    newText:string
}

export type ActionsTypes = AddPostActionType | ChangeNewTextActionType | AddMessageActionType | ChangeNewMessageActionType

let store:StoreStateType = {
    _state: {
    profilePage:{
        posts:[
            {id:1, message:'Hi,how are you',countLike:20},
            {id:2, message:"It is my first post", countLike:30},

        ],
        postMessage: ''
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
    _rerenderEntireTree(){
        debugger
        console.log('Hello')
    },
    getState(){
        return this._state},

    subscribe(observe){
        this._rerenderEntireTree=observe
    },
    dispatch(action){
       if (action.type === 'ADD-POST'){
           let newPost:PostType = {
               id:5,
               message:this._state.profilePage.postMessage = action.postMessage,
               countLike:5
           }
           this._state.profilePage.posts.push(newPost);
           this._state.profilePage.postMessage='';
           this._rerenderEntireTree(this._state);

       }else if (action.type === 'ADD-MESSAGE'){
           debugger
            let newMessage:MessageType = {
                id:5,
                name:this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText='';
            this._rerenderEntireTree(this._state);

        }
         else if (action.type === 'UPDATE-NEW-POST-TEXT'){
           debugger
           this._state.profilePage.postMessage = action.newText;
           this._rerenderEntireTree(this._state);

       }else  if (action.type === 'UPDATE-NEW-MESSAGE-TEXT'){
             debugger
           this._state.dialogsPage.newMessageText = action.newText;
           this._rerenderEntireTree(this._state);
       }
    }
}

export default store;
