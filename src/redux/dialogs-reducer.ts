import {MessageType} from "./state";

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
export default dialogsReducer;