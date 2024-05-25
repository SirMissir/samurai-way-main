import React, {RefObject} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {addMessageAC, newMessageTextAC} from "../../redux/dialogs-reducer";
import {DialogsPageType} from "../../redux/store";



type PropsType = {
    state: DialogsPageType
    dispatch: (action:any) => void
    updateNewDialogText:(text:string) => void
    onAddMessage:(text:string) => void
}


const Dialogs = (props: PropsType) => {

    let dialogsElements = props.state.dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id}/>)
    let messagesElements = props.state.messages.map(messages => <Message message={messages.name} id={messages.id}/>)

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();


    let addMessage = () => {
        let text = newPostElement.current?.value ?? '';
        props.onAddMessage(text)

    }

    let onPostChange = () => {
        let text = newPostElement.current?.value ?? '';
       props.updateNewDialogText(text)

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_members}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.item}>
                  <textarea
                      placeholder='Enter your message'
                      ref={newPostElement}
                      value={props.state.newMessageText}
                      onChange={onPostChange}
                  />
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs

