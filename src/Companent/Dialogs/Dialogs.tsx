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


    let dialogsData =[
        {id:1, name:"Dimych"},
        {id:2, name:"Andrey"},
        {id:3, name:"Sveta"},
        {id:4, name:"Lera"},
        {id:5, name:"Victor"}
    ]
    let messageData =[
        {id:1, name:"Hi"},
        {id:2, name:"How is your it-kamasutra"},
        {id:3, name:"OK"},
        {id:4, name:"How much your learning"},
        {id:5, name:"Victor"}
    ]

  return(
      <div className={s.dialogs}>
          <div className={s.dialogs_members}>
              <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
              <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
              <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
          </div>
          <div className={s.messages}>
              <Message message = {messageData[0].name} id={messageData[0].id}/>
              <Message message = {messageData[1].name} id={messageData[1].id}/>
              <Message message = {messageData[2].name} id={messageData[2].id}/>
              <Message message = {messageData[3].name} id={messageData[3].id}/>
              <Message message = {messageData[4].name} id={messageData[4].id}/>

          </div>
      </div>
  )
}

export default Dialogs

