import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

// export type MyPostType={
//     message:string
//     countLike:number
// }

function MyPosts() {
    return (

        <div className={s.myPosts}>
            My Posts
            <div className={s.item}>
                <textarea/>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post
                    message={'Hi,how are you'}
                    countLike={20}
                />
                <Post
                    message={"It is my first post"}
                    countLike={30}
                />
                <Post/>
            </div>
        </div>
    )
}

export default MyPosts;