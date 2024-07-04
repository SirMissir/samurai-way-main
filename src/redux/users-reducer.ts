
export type UsersType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location:LocationType

};
export type LocationType = {
    city:string
    country:string
};

export type InitialUsersStateType = {
    users: UsersType[]

};


let initialState:InitialUsersStateType = {
    users:[
        {id:1,
            photoUrl:'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png',
            followed: true,
            fullName:'Dmitry',
            status:'i am student',
            location:
                { city: 'Minsk', country: ' Belarus'}
        },
        {id:2,
            photoUrl:'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png',
            followed: false,
            fullName:'Sasha',
            status:'i am student',
            location:
                { city: 'Minsk', country: ' Belarus'}
        },
        {id:3,
            photoUrl:'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png',
            followed: false,
            fullName:'Andrey',
            status:'i am student',
            location:
                { city: 'Minsk', country: ' Belarus'}
        },
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
export const setUsersAC = (users:UsersType[]) => {
    return {
        type: 'SET-USERS',
        users
    } as const;
};
export default usersReducer;