import React, {RefObject} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsTypes, addPostAC, newPostTextAC, PostType} from "../../../redux/state";


type ProfileType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

function MyPosts(props: ProfileType) {

    let postsElement = props.posts.map(posts => <Post
        message={posts.message}
        countLike={posts.countLike}
    />)

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();

    let addPost = () => {
        let text = newPostElement.current?.value ?? ''; // Устанавливаем значение по умолчанию, если postMessage равен undefined
        let action = addPostAC(text)
        props.dispatch(action);
    }
    let onPostChange = () => {
        let text = newPostElement.current?.value ?? ''; // Устанавливаем значение по умолчанию, если text равен undefined
        let action = newPostTextAC(text)
        props.dispatch(action);
    }

    return (
        <div className={s.myPosts}>
            My Posts
            <div className={s.item}>
                <textarea
                    ref={newPostElement}
                    value={props.newPostText}
                    onChange={onPostChange}
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