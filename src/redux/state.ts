type MessageType={
    id: number
    name:string
}
type DialogType={
    id: number
    name:string
}
type PostType={
    id:number
    message:string
    countLike:number
}
type ProfilePageType={
    posts: Array<PostType>
}
type DialogsPageType={
    dialogs:Array<DialogType>
    messagesData:Array<MessageType>
}
type SidebarType={}

type RootStateType={
    profilePage:ProfilePageType
    dialogsPage:DialogsPageType
    sidebar:SidebarType
}

export type PathsType = {
    paths: {
        [key: string]: string;
    };
};


let state:RootStateType = {
    profilePage:{
        posts:[
            {id:1, message:'Hi,how are you',countLike:20},
            {id:2, message:"It is my first post", countLike:30},

        ],
    },
    dialogsPage:{
        dialogs:[
            {id:1, name:"Dimych"},
            {id:2, name:"Andrey"},
            {id:3, name:"Sveta"},
            {id:4, name:"Lera"},
            {id:5, name:"Victor"}
        ],
        messagesData:[
            {id:1, name:"Hi"},
            {id:2, name:"How is your it-kamasutra"},
            {id:3, name:"OK"},
            {id:4, name:"How much your learning"},
            {id:5, name:"Victor"}
        ]
    }

}

const PATH ={
    PAGE1: '/Profile',
    PAGE2: '/Dialogs',
    PAGE3: '/News',
    PAGE4: '/Music',
    PAGE5: '/Setting',
    ERORR: '/Error404',
} as const

export  default {state,PATH};