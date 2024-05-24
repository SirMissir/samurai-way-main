import React from 'react';
import { PostType} from "../../../redux/store";
import {addPostAC, newPostTextAC, profileReducerType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


type ProfileType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: profileReducerType) => void
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

export default MyPostsContainer;