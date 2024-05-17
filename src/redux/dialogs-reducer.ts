import {MessageType} from "./state";


type AddMessageTextACType = {
    type: 'ADD-MESSAGE'
    newMessageText: string
}
type NewMessageTextACType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newText: string
}

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case 'ADD - MESSAGE':
            let newMessage: MessageType = {
                id: 5,
                name: state.newMessageText,
            }
            state.messages.push(newMessage)
            state.newMessageText = '';
            return state
        case 'UPDATE - NEW - MESSAGE - TEXT' :
            state.newMessageText = action.newText;
            return state
        default:
            return state;
    }
}

export const addMessageAC=(text:string):AddMessageTextACType=>{
    return{
        type: 'ADD-MESSAGE',
        newMessageText:text
    }
}
export const newMessageTextAC=(text:string):NewMessageTextACType=>{
    return{
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newText: text
    }
}
export default dialogsReducer;