import React, {ChangeEvent, RefObject} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { PostType} from "../../../redux/store";



type ProfileType = {
    posts: Array<PostType>
    newPostText: string
    updateNewPostText:(text:string) => void
    addPost:(text:string) => void
}

function MyPosts(props: ProfileType) {

    let postsElement = props.posts.map(posts => <Post
        message={posts.message}
        countLike={posts.countLike}
    />)

    // let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();

    const onChangeInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value ?? '';
        props.updateNewPostText(text)
    }

    let onAddPost = () => {
        let text = newPostElement.current?.value ?? '';// Устанавливаем значение по умолчанию, если postMessage равен undefined
        props.addPost(text)
    }
    let onPostChange = () => {
        let text = newPostElement.current?.value ?? ''; // Устанавливаем значение по умолчанию, если text равен undefined
        props.updateNewPostText(text)
    }

    return (
        <div className={s.myPosts}>
            My Posts
            <div className={s.item}>
                <textarea
                    // ref={newPostElement}
                    value={props.newPostText}
                    onChange={onChangeInputHandler }
                />
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;