import React from 'react';
import {addPostAC, newPostTextAC, } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {ActionsTypes, StoreType} from "../../../redux/redux-store";
import {Store} from "redux";



type ProfileType = {
    store: Store<StoreType, ActionsTypes>
}

type MapDispatchToPropsType = {
    addPost: (text:string) => void
    updateNewPostText: (text: string) => void
}

function MyPostsContainer({store}: ProfileType) {
    const { posts, currentPostText } = store.getState().profilePage;
    const { dispatch } = store;


    let addPost = () => dispatch(addPostAC());

    let onPostChange = (text:string) =>dispatch(newPostTextAC(text));


    return (<MyPosts
        posts={posts}
        currentPostText={currentPostText}
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