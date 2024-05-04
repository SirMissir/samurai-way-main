import React, {RefObject} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import state, {ActionsTypes, PostType} from "../../../redux/state";
import store from "../../../redux/state";


// type ProfileType = {
//     posts: Array<PostType>
//     addPost: (postMessage: string) => void;
//     updateNewPostText: (newText: string) => void;
//     postMessage:string|undefined
//     dispatch:(action:ActionsTypes)=>void
//
// }

function MyPosts(props: ) {

    let postsElement = props.posts.map(posts => <Post
        message={posts.message}
        countLike={posts.countLike}
    />)

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();

    let addPost = () => {
        if(newPostElement.current){
            props.dispatch({type:'ADD-POST',postMessage:newPostElement.current?.value})
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
                    value={props.postMessage}
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