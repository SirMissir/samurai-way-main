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
    let messagesData =[
        {id:1, name:"Hi"},
        {id:2, name:"How is your it-kamasutra"},
        {id:3, name:"OK"},
        {id:4, name:"How much your learning"},
        {id:5, name:"Victor"}
    ]

    let dialogsElements = dialogsData.map( dialogs=> <DialogItem name={dialogs.name} id={dialogs.id}/>)
    let messagesElements = messagesData.map(messages => <Message message = {messages.name} id={messages.id}/>)

  return(
      <div className={s.dialogs}>
          <div className={s.dialogs_members}>
              {dialogsElements}
          </div>
          <div className={s.messages}>
              {messagesElements}
          </div>
      </div>
  )
}

export default Dialogs

