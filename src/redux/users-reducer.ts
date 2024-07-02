
export type UsersType = {
    id: number
    fullName: string
    status: string
    followed: boolean
    location:LocationType

};
export type LocationType = {
    city:number
    country:string
};

export type InitialUsersStateType = {
    users: UsersType[]

};


let initialState:InitialUsersStateType = {
    users:[
    //     {id:1, followed: true, fullName:'Dmitry',status:'i am student', location: { city: 'Minsk', country: ' Belarus'}},
    //     {id:2, followed: false, fullName:'Sasha',status:'i am student', location: { city: 'Minsk', country: ' Belarus'}},
    //     {id:3, followed: false, fullName:'Andrey',status:'i am student', location: { city: 'Minsk', country: ' Belarus'}},
    ],
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
        userId: userId
    } as const;
};

export type unfollowACType = ReturnType<typeof unfollowAC>;
export const unfollowAC = (userId:number) => {
    return {
        type: 'UNFOLLOW',
        userId: userId
    } as const;
};

export type setUsersACType = ReturnType<typeof setUsersAC>;
export const setUsersAC = (users:UsersType[]) => {
    return {
        type: 'SET-USERS',
        users:users
    } as const;
};
export default usersReducer;