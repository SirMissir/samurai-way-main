import React, {RefObject} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import state, {ActionsTypes, PostType} from "../../../redux/state";
import store from "../../../redux/state";


type ProfileType = {
    posts: Array<PostType>
    newPostText:string
    dispatch:(action:ActionsTypes)=>void
}

function MyPosts(props:ProfileType ) {

    let addPostActionCreator =()=>{
        return {
            type: 'ADD-POST'
        }
    }

    let postsElement = props.posts.map(posts => <Post
        message={posts.message}
        countLike={posts.countLike}
    />)

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();

    let addPost = () => {
        if(newPostElement.current){
            props.dispatch(addPostActionCreator())
        }
    }


    let onPostChange = ()=>{
        if(newPostElement.current){
            props.dispatch({type:'UPDATE-NEW-POST-TEXT',newText:newPostElement.current?.value})

        }
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