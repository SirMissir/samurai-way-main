import {PostType} from "./state";

type AddPostTextACType = {
    type: 'ADD-POST'
    postMessage: string
}
type NewPostTextACType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

const profileReducer = (state, action) => {
    switch (action.type) {
        case 'ADD-POST' :
            let newPost: PostType = {
                id: 5,
                message: state.postMessage = action.postMessage,
                countLike: 5
            }
            state.posts.push(newPost);
            state.postMessage = '';
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.postMessage = action.newText;
            return state;
        default:
            return state;
    }
}
export const addPostAC=(text:string):AddPostTextACType=>{
    return{
        type: 'ADD-POST',
        postMessage:text
    }as const
}

export const newPostTextAC=(text:string):NewPostTextACType=>{
    return{
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    }
}
export default profileReducer;