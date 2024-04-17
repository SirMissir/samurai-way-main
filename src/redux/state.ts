import {rerenderEntireTree} from "../index";

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
}
export type SidebarType={}
export type RootStateType={
    profilePage:ProfilePageType
    dialogsPage:DialogsPageType
    sidebar:SidebarType
}


let state:RootStateType = {
    profilePage:{
        posts:[
            {id:1, message:'Hi,how are you',countLike:20},
            {id:2, message:"It is my first post", countLike:30},

        ],
        newPostText: 'it-kamasutra'
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
        ]
    },
    sidebar:{}

}

export let addPost = (postMessage:string) => {

    let newPost:PostType = {
        id:5,
        message:postMessage,
        countLike:5
    }
    state.profilePage.posts.push(newPost)
}

export let updateNewPostText = (newText:string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export  default state;