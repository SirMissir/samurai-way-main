import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {Dispatch} from "redux";
import {followAC, InitialUsersStateType, setUsersAC, unfollowAC, UsersType} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    usersPage: InitialUsersStateType
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
}

let mapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
};
let mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    return {
        follow  : (userId:number)     => dispatch(followAC(userId)),
        unfollow: (userId:number)     => dispatch(unfollowAC(userId)),
        setUsers: (users:UsersType[]) => dispatch(setUsersAC(users))
    }
};

export default connect (mapStateToProps,mapDispatchToProps) (Users);