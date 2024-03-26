import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import * as PATH from "path";
import {PathsType} from "../../App";




function Navbar(props:PathsType) {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={props.paths.PAGE1} className={({ isActive,  }) =>
                    isActive ? s.active : ""
                } >Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={props.paths.PAGE2} className={({ isActive,  }) =>
                    isActive ? s.active : ""
                } >Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={props.paths.PAGE3} className={({ isActive,  }) =>
                    isActive ? s.active : ""
                } >News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={props.paths.PAGE4} className={({ isActive,  }) =>
                    isActive ? s.active : ""
                }>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={props.paths.PAGE5} className={({ isActive,  }) =>
                    isActive ? s.active : ""
                } >Setting</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;