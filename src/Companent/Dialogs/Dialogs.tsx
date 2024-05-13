import React, {RefObject} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import  {ActionsTypes, addMessageAC, DialogsPageType, newMessageTextAC} from "../../redux/state";



type PropsType={
    state:DialogsPageType
    dispatch:(action:ActionsTypes)=>void
}


const Dialogs = (props:PropsType) => {

    let dialogsElements = props.state.dialogs.map( dialogs=> <DialogItem name={dialogs.name} id={dialogs.id}/>)
    let messagesElements = props.state.messages.map(messages => <Message message = {messages.name} id={messages.id}/>)

    let newPostElement: RefObject<HTMLTextAreaElement>=React.createRef();


    let addMessage = () => {
        debugger
        let text = newPostElement.current?.value ?? '';
        let action = addMessageAC(text)
        props.dispatch(action)

    }

    let onPostChange = ()=>{
        debugger
        let text = newPostElement.current?.value ?? '';
        let action = newMessageTextAC(text)
        props.dispatch(action)

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
                      value={props.state.newMessageText}
                      onChange={onPostChange}
                  />
                  <button onClick={addMessage}>Add post</button>
              </div>
          </div>
      </div>
  )
}

export default Dialogs

