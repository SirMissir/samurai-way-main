import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ActionsTypes, StoreType} from "../../redux/redux-store";
import {Store} from "redux";

type AppType = {
    store: Store<StoreType, ActionsTypes>
}


function Profile({store}: AppType) {
    return (
        <div className={s.content}>
            <div>
                <ProfileInfo/>
                <MyPostsContainer
                    store={store}
                />
            </div>


        </div>
    )
}

export default Profile;
