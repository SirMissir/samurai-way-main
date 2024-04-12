import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePage} from "../../App";


type AppProps = {
    state:ProfilePage
}

function Profile(props:AppProps) {
    return (
        <div className={s.content}>
            <div>
                <ProfileInfo/>
                <MyPosts postsData={props.state.postsData}/>
            </div>


        </div>
    )
}

export default Profile;
