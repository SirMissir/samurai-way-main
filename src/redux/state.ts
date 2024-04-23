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
    newPostText:string
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
    getState:()=>RootStateType;
    _rerenderEntireTree: (state:RootStateType)=>void;
    addPost: (postMessage: string) => void;
    updateNewPostText: (newText: string) => void;
    addMessage: (postMessage: string) => void;
    updateNewMessageText: (newText: string) => void;
    subscribe:(observe:(state:RootStateType)=>void)=>void
}

let store:StoreStateType = {
    _state: {
    profilePage:{
        posts:[
            {id:1, message:'Hi,how are you',countLike:20},
            {id:2, message:"It is my first post", countLike:30},

        ],
        newPostText: ''
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
    getState(){
        return this._state},
    _rerenderEntireTree(){
        console.log('Hello')
    },
    addPost(){

        let newPost:PostType = {
            id:5,
            message:this._state.profilePage.newPostText,
            countLike:5
        }
        this._state.profilePage.posts.push(newPost)
    },
    updateNewPostText (newText:string,){
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree(this._state);
    },
    addMessage () {

        let newMessage:MessageType = {
            id:5,
            name:this._state.dialogsPage.newMessageText,
        }
        this._state.dialogsPage.messages.push(newMessage)
    },
    updateNewMessageText (newText:string) {

        this._state.dialogsPage.newMessageText = newText;
        this._rerenderEntireTree(this._state);
    },
    subscribe(observe){
        this._rerenderEntireTree=observe
    }
}
// let state:RootStateType = {
//     profilePage:{
//         posts:[
//             {id:1, message:'Hi,how are you',countLike:20},
//             {id:2, message:"It is my first post", countLike:30},
//
//         ],
//         newPostText: ''
//     },
//     dialogsPage:{
//         dialogs:[
//             {id:1, name:"Dimych"},
//             {id:2, name:"Andrey"},
//             {id:3, name:"Sveta"},
//             {id:4, name:"Lera"},
//             {id:5, name:"Victor"}
//         ],
//         messages:[
//             {id:1, name:"Hi"},
//             {id:2, name:"How is your it-kamasutra"},
//             {id:3, name:"OK"},
//             {id:4, name:"How much your learning"},
//             {id:5, name:"Victor"}
//         ],
//         newMessageText: ''
//     },
//     sidebar:{}
//
// }
//
// export let addPost = () => {
//
//     let newPost:PostType = {
//         id:5,
//         message:state.profilePage.newPostText,
//         countLike:5
//     }
//     state.profilePage.posts.push(newPost)
// }
// export let addMessage = () => {
//
//     let newMessage:MessageType = {
//         id:5,
//         name:state.dialogsPage.newMessageText,
//     }
//     state.dialogsPage.messages.push(newMessage)
// }
// export let updateNewPostText = (newText:string) => {
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree(state);
// };
// export let updateNewMessageText = (newText:string) => {
//
//     state.dialogsPage.newMessageText = newText;
//     rerenderEntireTree(state);
// };
//
// let rerenderEntireTree =(state:RootStateType)=>{
//     console.log('Hello')
// }
// export const subscribe = (observe:(state:RootStateType)=>void)=>{
//     rerenderEntireTree=observe
// }
//
// export  default state;
export default store;
// window.store = store;