import {PostType, ProfilePageType} from "./state";

const profileReducer = (state:ProfilePageType, action:profileReducerType) => {
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

export type profileReducerType = addPostACType | newPostTextACType

export type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC=(text:string)=>{
    return{
        type: 'ADD-POST',
        postMessage:text
    }as const
}

export type newPostTextACType = ReturnType<typeof newPostTextAC>
export const newPostTextAC=(text:string)=>{
    return{
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}

export default profileReducer;