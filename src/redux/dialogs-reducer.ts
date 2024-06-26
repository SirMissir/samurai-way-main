type dialogsType ={
    id:number,
    name: string
}
type messagesType ={
    id:number,
    name: string
}

export type InitialMessagesStateType={
    dialogs:dialogsType[],
    messages:messagesType[],
    newMessageText:string
}

let initialState:InitialMessagesStateType = {
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
}

const dialogsReducer = (state:InitialMessagesStateType=initialState, action:dialogsReducerType) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage: messagesType = {
                id: 5,
                name: state.newMessageText,
            }
            return {
                ...state,
                messages: [...state.messages,newMessage],
                newMessageText: ''
            }
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {
                ...state,
                newMessageText: action.newText
            }

        default:
            return state;
    }
}
export type dialogsReducerType = addMessageACType | newMessageTextACType

export type addMessageACType = ReturnType<typeof addMessageAC>
export const addMessageAC=()=>{
    return{
        type: 'ADD-MESSAGE',
    }as const
}

export type newMessageTextACType=ReturnType<typeof newMessageTextAC>
export const newMessageTextAC=(text:string)=>{
    return{
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newText: text
    } as const
}
export default dialogsReducer;