import {MessageType, PostType} from "./state";

const profileReducer = (state,action) => {

    if (action.type === 'ADD-POST'){
        let newPost:PostType = {
            id:5,
            message:this._state.profilePage.postMessage = action.postMessage,
            countLike:5
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.postMessage='';
        this._callSubscriber(this._state);
    }else if (action.type === 'ADD-MESSAGE'){
        let newMessage:MessageType = {
            id:5,
            name:this._state.dialogsPage.newMessageText,
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText='';
        this._callSubscriber(this._state);
    }
    else if (action.type === 'UPDATE-NEW-POST-TEXT'){
        debugger
        this._state.profilePage.postMessage = action.newText;
        this._callSubscriber(this._state);
    }

    return state;
}