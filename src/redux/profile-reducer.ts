import {PostType} from "./state";

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

export default profileReducer;