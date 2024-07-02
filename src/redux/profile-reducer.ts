
export type PostType = {
    id: number
    message: string
    countLike: number
};

export type InitialProfileStateType = {
    posts: PostType[]
    newPostText: string
};


let initialState:InitialProfileStateType = {
    posts:[
        {id:1, message:'Hi,how are you',countLike:20},
        {id:2, message:"It is my first post", countLike:30},

    ],
    newPostText: ''
}

const profileReducer = (state:InitialProfileStateType = initialState, action:profileReducerType):InitialProfileStateType => {
    switch (action.type) {
        case 'ADD-POST' :
            let newPost: PostType = {
                id: 5,
                message: state.newPostText,
                countLike: 5
            };
            return {
                ...state,
                posts:[newPost,...state.posts],
            newPostText: ''
            };
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
    }
}

export type addPostACType = ReturnType<typeof addPostAC>;
export const addPostAC = () => {
    return {
        type: 'ADD-POST',
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