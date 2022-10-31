import React from 'react';
import s from './Profile.module.css';

function Profile() {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://images.pexels.com/photos/127160/pexels-photo-127160.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    alt="Banner"/>
            </div>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTHxHKq92yNEVYlgiRzFFKoG-h0_kYI9ouhtE3oGoh0OFlMf75alT_YvYzQOR1qVXB1s0&usqp=CAU'
                    alt="Avatar img"/>
            </div>
            <div>
                ava+description
            </div>
            <div>
                My post
                <div>
                    New Post
                </div>
                <div>
                    <div className={s.color}>
                        Post 1
                    </div>
                    <div className={s.color}>
                        Post 2
                    </div>
                    <div className={s.color}>
                        Post 3
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Profile;