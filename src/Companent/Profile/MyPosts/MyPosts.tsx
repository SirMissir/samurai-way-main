import React, {RefObject, useState} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type PropsType={
    posts:Array<PostType>
}

function MyPosts(props:PropsType ) {

        let postsElement = props.posts.map(posts=> <Post
            message={posts.message}
            countLike={posts.countLike}
        />)
    let newPostElement: RefObject<HTMLTextAreaElement>=React.createRef();
    let addPost = ()=>{
            let text = newPostElement.current?.value
        alert(text)
    }

    return (
        <div className={s.myPosts}>
            My Posts
            <div className={s.item}>
                <textarea ref={newPostElement}></textarea>
                <button onClick={()=>{alert('it incubator')}}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;