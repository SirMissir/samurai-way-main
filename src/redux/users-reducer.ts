
export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        large: string
        small: string
    }
    followed: boolean
}

export type InitialUsersStateType = {
    users: UserType[]

};


let initialState:InitialUsersStateType = {
    users:[]
};



const usersReducer = (state:InitialUsersStateType=initialState, action:userReducerACType):InitialUsersStateType => {
    switch (action.type) {
        case'FOLLOW':
            return {
            ...state,
                users:state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u ;
                })
            };
        case 'UNFOLLOW':
            return {
                ...state,
                users:state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u ;
                })
            };
        case 'SET-USERS':
            return{
                ...state, users: [...state.users,...action.users]
            }
        default:
            return state;
    }
}
export type userReducerACType = followACType|unfollowACType|setUsersACType
export type followACType = ReturnType<typeof followAC>;
export const followAC = (userId:number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const;
};

export type unfollowACType = ReturnType<typeof unfollowAC>;
export const unfollowAC = (userId:number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const;
};

export type setUsersACType = ReturnType<typeof setUsersAC>;
export const setUsersAC = (users:UserType[]) => {
    return {
        type: 'SET-USERS',
        users
    } as const;
};
export default usersReducer;