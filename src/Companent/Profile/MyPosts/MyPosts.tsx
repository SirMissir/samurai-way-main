import React, {useState} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type PropsType={
    posts:Array<PostType>
}

function MyPosts(props:PropsType ) {

        let postsElement = props.posts.map(posts=>
            <Post
            message={posts.message}
            countLike={posts.countLike}
        />)

    const [text,setText]=useState('')

    let addPost = () => {
            alert(text)
    }
    return (
        <div className={s.myPosts}>
            My Posts
            <div className={s.item}>
                <textarea
                    onClick={addPost}
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;