import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/state";

type AppType={
    dispatch:(action:ActionsTypes)=>void
    profilePage:ProfilePageType
    // addPost: (postMessage: string) => void;
    // updateNewPostText: (newText: string) => void;

}


function Profile(props:AppType) {
    return (
        <div className={s.content}>
            <div>
                <ProfileInfo/>
                <MyPosts dispatch={props.dispatch}
                         posts={props.profilePage.posts}
                         newPostText={props.profilePage.postMessage}
                         // addPost={props.addPost}
                         // updateNewPostText={props.updateNewPostText}
                />
            </div>


        </div>
    )
}

export default Profile;
