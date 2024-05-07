import React, {RefObject} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import state, {ActionsTypes, DialogsPageType} from "../../redux/state";



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
        if(newPostElement.current){
            props.dispatch({type:'ADD-MESSAGE',postMessage:newPostElement.current?.value})
        }
    }

    let onPostChange = ()=>{
        debugger
        if(newPostElement.current){
            props.dispatch({type:'UPDATE-NEW-MESSAGE-TEXT',newText:newPostElement.current?.value})
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

