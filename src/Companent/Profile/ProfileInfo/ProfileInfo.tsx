import React from 'react';
import s from './ProfileInfo.module.css'



function ProfileInfo() {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://images.pexels.com/photos/127160/pexels-photo-127160.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    alt="Banner"/>
            </div>
            <div>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;