import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem =(props:any)=>{
    let path = "/dialogs/" + props.id;
    return(
        <div className={s.member}>
            <NavLink to={path} >
                {props.name}
            </NavLink>
        </div>
    )
}
const Message =(props:any)=>{
    return(
        <div className={s.message}>{props.message}</div>
    )
}
const Dialogs = (props:any) => {
  return(
      <div className={s.dialogs}>
          <div className={s.dialogs_members}>
              <DialogItem name={"Dimych"} id={"1"}/>
              <DialogItem name={"Andrey"} id={"2"}/>
              <DialogItem name={"Sveta"} id={"3"}/>
              <DialogItem name={"Lera"} id={"4"}/>
              <DialogItem name={"Victor"} id={"5"}/>
          </div>
          <div className={s.messages}>
              <Message message = "Hi"/>
              <Message message = "How is your it-kamasutra"/>
              <Message message = "OK"/>

          </div>
      </div>
  )
}

export default Dialogs

