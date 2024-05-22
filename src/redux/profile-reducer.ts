import {PostType, ProfilePageType} from "./store";

let initialState = {
    posts:[
        {id:1, message:'Hi,how are you',countLike:20},
        {id:2, message:"It is my first post", countLike:30},

    ],
    postMessage: ''
}

const profileReducer = (state:ProfilePageType = initialState, action:profileReducerType) => {
    debugger
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

export type addPostACType = ReturnType<typeof addPostAC>;
export const addPostAC = (text: string) => {
    return {
        type: 'ADD-POST',
        postMessage: text,
    } as const;
};

export type newPostTextACType = ReturnType<typeof newPostTextAC>;
export const newPostTextAC = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text,
    } as const;
};

export type profileReducerType = addPostACType | newPostTextACType;

export default profileReducer;