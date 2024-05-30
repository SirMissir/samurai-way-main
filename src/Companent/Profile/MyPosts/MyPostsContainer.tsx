import React from 'react';
import { PostType} from "../../../redux/store";
import {addPostAC, newPostTextAC, profileReducerType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {text} from "stream/consumers";
import {connect} from "react-redux";
import {Dispatch} from "redux";


// type ProfileType = {
//     posts: Array<PostType>
//     newPostText: string
//     dispatch: (action: profileReducerType) => void
// }
export type MyPostsPropsType = InitialProfileStateType & MapDispatchToPropsType


type MapDispatchToPropsType = {
    addPost: (text:string) => void
    updateNewPostText: (text: string) => void
}

function MyPostsContainer(props: ProfileType) {
    // let state = props.store.getState() // L42 реализованно на уровне App, нет смысла на столько глубоко прокидывать данные

    let addPost = (text:string) => {
        let action = addPostAC(text)
        // props.store.dispatch(action); //L42 можно добавить store для большего функционала( но загрязняет данными)
        props.dispatch(action);
    }
    let onPostChange = (text:string) => {
        let action = newPostTextAC(text)
        props.dispatch(action)
    }

    return (<MyPosts
        posts={props.posts}
        newPostText={props.newPostText}
        updateNewPostText={onPostChange}
        addPost={addPost}
    />)
}

const mapStateToProps = (state)=>{
    return{
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}
const mapDispatchToProps (dispatch:Dispatch):MapDispatchToPropsType=>{
    return {
        updateNewPostext: (text:string) =>{
            let action = newPostTextAC(text)
            props.dispatch(action)
        },
        addPost:()=>{
            let action = addPostAC(text)
            props.dispatch(action);
        }
    }
}

const MyPostsContainer = connect (mapStateToProps,mapDispatchToProps)(MyPosts)


export default MyPostsContainer;