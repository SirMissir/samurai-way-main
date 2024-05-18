import {DialogsPageType, MessageType} from "./state";

const dialogsReducer = (state:DialogsPageType, action:dialogsReducerType) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage: MessageType = {
                id: 5,
                name: state.newMessageText,
            }
            state.messages.push(newMessage)
            state.newMessageText = '';
            return state;
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}
export type dialogsReducerType = addMessageACType | newMessageTextACType

export type addMessageACType = ReturnType<typeof addMessageAC>
export const addMessageAC=(text:string)=>{
    return{
        type: 'ADD-MESSAGE',
        newMessageText:text
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