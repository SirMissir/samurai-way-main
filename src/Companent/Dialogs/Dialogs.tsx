import React, {RefObject} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import state, {DialogsPageType, updateNewMessageText} from "../../redux/state";
import {rerenderEntireTree} from "../../index";


type PropsType={
    state:DialogsPageType
    addMessage:(postMessageText: string)=>void
    updateNewMessageText:(newText: string)=>void
    newMessageText:string
}


const Dialogs = (props:PropsType) => {

    let dialogsElements = props.state.dialogs.map( dialogs=> <DialogItem name={dialogs.name} id={dialogs.id}/>)
    let messagesElements = props.state.messages.map(messages => <Message message = {messages.name} id={messages.id}/>)

    let newPostElement: RefObject<HTMLTextAreaElement>=React.createRef();

    let addMessage = () => {
        if(newPostElement.current){
            props.addMessage ( newPostElement.current.value);
            props.updateNewMessageText('')
        }
    }

    let onPostChange = ()=>{
        if(newPostElement.current){
            props.updateNewMessageText( newPostElement.current?.value)
        }
    }

  return(
      <div className={s.dialogs}>
          <div className={s.dialogs_members}>
              {dialogsElements}
          </div>
          <div className={s.messages}>
              {messagesElements}
              <div className={s.item}>
                  <textarea
                      ref={newPostElement}
                      value={props.newMessageText}
                      onChange={onPostChange}
                  />
                  <button onClick={addMessage}>Add post</button>
              </div>
          </div>
      </div>
  )
}

export default Dialogs

