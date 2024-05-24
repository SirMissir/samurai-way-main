import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type AppType = {
    dispatch: (action:any) => void
    profilePage: ProfilePageType
}


function Profile(props: AppType) {
    return (
        <div className={s.content}>
            <div>
                <ProfileInfo/>
                <MyPostsContainer posts={props.profilePage.posts}
                         newPostText={props.profilePage.postMessage}
                         dispatch={props.dispatch}

                />
            </div>


        </div>
    )
}

export default Profile;
