import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    return (

        <div>
            My Posts
            <div className={s.item}>
                <textarea/>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi,how are you'/>
                <Post />
                <Post/>
            </div>
        </div>
    )
}

export default MyPosts;