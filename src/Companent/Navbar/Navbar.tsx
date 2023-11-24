import React from 'react';
import s from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={`${s.color} ${s.active}`}>
                <a>Profile</a>
            </div>
            <div className={s.color}>
                <a>Messages</a>
            </div>
            <div className={s.color}>
                <a>News</a>
            </div>
            <div className={s.color}>
                <a>Music</a>
            </div>
            <div className={s.color}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;