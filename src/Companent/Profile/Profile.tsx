import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {

    /* let postsData =[
         {id:1, message:'Hi,how are you',countLike:20},
         {id:2, message:"It is my first post", countLike:30},

     ]*/
    return (
        <div className={s.content}>
            <div>
                <ProfileInfo/>
                <MyPosts postsData={props.postsData}/>
            </div>


        </div>
    )
}

export default Profile;
