import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/store";


type ProfileType = {
    posts: Array<PostType>
    currentPostText: string
    addPost: () => void
    updateCurrentPostText: (text: string) => void
}

function MyPosts(props: ProfileType) {
    const {
        posts,
        currentPostText,
        addPost,
        updateCurrentPostText
    } = props;

    let postsElement = props.posts.map(posts => <Post
            message={posts.message}
            countLike={posts.countLike}
        />)

    const onChangeInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let postText = e.currentTarget.value ?? '';
        updateCurrentPostText(postText)
    }

    let addPostHandler = () => addPost();

    return (
        <div className={s.myPosts}>
            My Posts
            <div className={s.item}>
                <textarea
                    value={currentPostText}
                    onChange={onChangeInputHandler}
                />
                <button onClick={addPostHandler}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}


export default MyPosts;
