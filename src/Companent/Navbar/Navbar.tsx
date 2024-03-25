import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import * as PATH from "path";
import {PathsType} from "../../App";






function Navbar(props:PathsType) {
    return (
        <nav className={s.nav}>
            <div className={`${s.color} ${s.active}`}>
                <a ><NavLink to={props.paths.PAGE1} >Profile</NavLink></a>
            </div>
            <div className={s.color}>
                <a ><NavLink to={props.paths.PAGE2} >Message</NavLink></a>
            </div>
            <div className={s.color}>
                <a><NavLink to={props.paths.PAGE2} >News</NavLink></a>
            </div>
            <div className={s.color}>
                <a><NavLink to={props.paths.PAGE2} >Music</NavLink></a>
            </div>
            <div className={s.color}>
                <a><NavLink to={props.paths.PAGE2} >Setting</NavLink></a>
            </div>
        </nav>
    )
}

export default Navbar;