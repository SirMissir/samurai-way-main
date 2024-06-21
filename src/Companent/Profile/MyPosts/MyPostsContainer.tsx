import React from 'react';
import { PostType} from "../../../redux/store";
import {addPostAC, newPostTextAC, profileReducerType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type ProfileType = {
    posts: Array<PostType>
    currentPostText: string
    dispatch: (action: profileReducerType) => void
}
// export type MyPostsPropsType = InitialProfileStateType & MapDispatchToPropsType


type MapDispatchToPropsType = {
    addPost: (text:string) => void
    updateNewPostText: (text: string) => void
}

function MyPostsContainer(props: ProfileType) {

    let addPost = () => {
        let action = addPostAC()
        props.dispatch(action);
    }
    let onPostChange = (text:string) => {
        let action = newPostTextAC(text)
        props.dispatch(action)
    }

    return (<MyPosts
        posts={props.posts}
        currentPostText={props.currentPostText}
        updateCurrentPostText={onPostChange}
        addPost={addPost}
    />)
}

// const mapStateToProps = (state:any)=>{
//     return{
//         posts:state.profilePage.posts,
//         newPostText:state.profilePage.newPostText
//     }
// }
// const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType=>{
//     return {
//         updateNewPostext: (text:string) =>{
//             dispatch(newPostTextAC(text));
//         },
//         addPost:(text:string)=>{
//             dispatch(addPostAC(text));
//         }
//     }
// }

// const MyPostsContainer = connect (mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
// export default MyPostsContainer;