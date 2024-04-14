import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


type PropsType={
    state:DialogsPageType
}


const Dialogs = (props:PropsType) => {

    let dialogsElements = props.state.dialogs.map( dialogs=> <DialogItem name={dialogs.name} id={dialogs.id}/>)
    let messagesElements = props.state.messages.map(messages => <Message message = {messages.name} id={messages.id}/>)

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

