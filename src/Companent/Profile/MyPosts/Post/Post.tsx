import React from 'react';
import s from './Post.module.css';


function Post(props:any) {

    return (
            <div className={s.item}>
                <img
                    src='https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0'
                    alt="Logo"/>
                {props.message}
                <div>
                    <span>like</span>
                </div>
            </div>
    )
}

export default Post;