import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type AppType={
    profilePage:ProfilePageType
    addPost: (postMessage: string) => void;
    updateNewPostText: (newText: string) => void;
}


function Profile(props:AppType) {
    return (
        <div className={s.content}>
            <div>
                <ProfileInfo/>
                <MyPosts posts={props.profilePage.posts}
                         newPostText={props.profilePage.newPostText}
                         addPost={props.addPost}
                         updateNewPostText={props.updateNewPostText}
                />
            </div>


        </div>
    )
}

export default Profile;
