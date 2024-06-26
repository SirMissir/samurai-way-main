import React from 'react';
import {addPostAC, InitialProfileStateType, newPostTextAC,} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";


export type MyPostsPropsType = InitialProfileStateType & MapDispatchToPropsType

type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

const mapStateToProps = (state:AppStateType):InitialProfileStateType=>{
    return{
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType=>{
    return {
        addPost:()=>{
            dispatch(addPostAC());
        },
        updateNewPostText: (text:string) =>{
            dispatch(newPostTextAC(text));
        }
    }
}

const MyPostsContainer = connect (mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
