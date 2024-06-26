import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";



function MyPosts(props: MyPostsPropsType) {
    const {
        posts,
        newPostText,
        addPost,
        updateNewPostText
    } = props;

    let postsElement = posts.map(posts =>
        <Post
            key={posts.id}
            message={posts.message}
            countLike={posts.countLike}
        />)

    const onChangeInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let postText = e.currentTarget.value ?? '';
        updateNewPostText(postText)
    }
    return (
        <div className={s.myPosts}>
            My Posts
            <div className={s.item}>
                <textarea
                    value={newPostText}
                    onChange={onChangeInputHandler}
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
