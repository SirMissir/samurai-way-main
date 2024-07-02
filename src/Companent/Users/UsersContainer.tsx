import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";

let mapStateToProps = (state:AppStateType) => {
    return {
        users: state.usersPage.users
    }
};
let mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        follow: (userId:number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId:number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users:UsersType[]) => {
            dispatch(setUsersAC(users))
        }
    }
};

export default connect (mapStateToProps,mapDispatchToProps) (Users);