import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

// export type MyPostType={
//     message:string
//     countLike:number
// }

function MyPosts() {

    let postsData =[
        {id:1, message:'Hi,how are you',countLike:20},
        {id:2, message:"It is my first post", countLike:30},

    ]
        let postsElement = postsData.map(posts=><Post
            message={posts.message}
            countLike={posts.countLike}
        />)

    return (
        <div className={s.myPosts}>
            My Posts
            <div className={s.item}>
                <textarea/>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;