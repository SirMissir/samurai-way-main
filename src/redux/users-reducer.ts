
export type UsersType = {
    id: number
    fullName: string
    status: string
    location:LocationType[]
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
        {id:1, followed: true, fullName:'Dmitry',status:'i am student', location: { city: 'Minsk', country: ' Belarus'}},
        {id:2, followed: false, fullName:'Sasha',status:'i am student', location: { city: 'Minsk', country: ' Belarus'}},
        {id:3, followed: false, fullName:'Andrey',status:'i am student', location: { city: 'Minsk', country: ' Belarus'}},
    ],
}

const usersReducer = (state:InitialUsersStateType=initialState, action:###):InitialUsersStateType => {
    debugger
    switch (action.type) {
        case:'FOLLOW'
            return {
            ...state,
                users:state.users.map(u => {
                    if (u.id === action.userID){
                        return {...u, followed: true}
                    }
                    return u ;
                })
            };
        case '###':
            return {};
        default:
            return state;
    }
}

export type followACType = ReturnType<typeof followAC>;
export const followAC = () => {
    return {
        type: 'FOLLOW'
        userID: string
    } as const;
};

export type unfollowACACType = ReturnType<typeof unfollowAC>;
export const unfollowAC = () => {
    return {
        type: 'UNFOLLOW'
    } as const;
};
export default usersReducer;