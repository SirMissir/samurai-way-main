import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem =(props:any)=>{
    let path = "/dialogs/" + props.id;
    return(
        <div className={s.member}>
            <img
                src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                alt="Avatar"/>
            <NavLink to={path} >
                {props.name}
            </NavLink>
        </div>
    )
}



export default DialogItem