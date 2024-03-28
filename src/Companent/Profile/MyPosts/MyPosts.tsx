import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

// export type MyPostType={
//     message:string
//     countLike:number
// }

function MyPosts() {

    let postData =[
        {id:1, message:'Hi,how are you',countLike:20},
        {id:2, message:"It is my first post", countLike:30},

    ]


    return (
        <div className={s.myPosts}>
            My Posts
            <div className={s.item}>
                <textarea/>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post
                    message={postData[0].message}
                    countLike={postData[0].countLike}
                />
                <Post
                    message={postData[1].message}
                    countLike={postData[1].countLike}
                />
            </div>
        </div>
    )
}

export default MyPosts;