import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type AppType = {
    dispatch: (action) => void
    profilePage: ProfilePageType
}


function Profile(props: AppType) {
    return (
        <div className={s.content}>
            <div>
                <ProfileInfo/>
                <MyPosts dispatch={props.dispatch}
                         posts={props.profilePage.posts}
                         newPostText={props.profilePage.postMessage}
                />
            </div>


        </div>
    )
}

export default Profile;
