
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import React, {RefObject} from "react";


const Message =(props:any)=>{

        return(
                    <div className={s.message}>{props.message}</div>

        )
}

export default Message

