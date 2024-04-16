import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type PropsType={
    profilePage:ProfilePageType
}


function Profile(props:PropsType) {
    return (
        <div className={s.content}>
            <div>
                <ProfileInfo/>
                <MyPosts posts={props.profilePage.posts}
                         newPostText={props.profilePage.newPostText}
                         addPost={props.addPost}/>
            </div>


        </div>
    )
}

export default Profile;
