import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";

const Dialogs = (props: DialogsPropsType) => {
    const  {
        dialogs,
        messages,
        newMessageText,
        onAddMessage,
        updateNewDialogText
    } =  props

    let dialogsElements = dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id}/>)
    let messagesElements = messages.map(messages => <Message message={messages.name} id={messages.id}/>)

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let message = e.currentTarget.value ?? '';
        updateNewDialogText(message);
    };

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
                      value={newMessageText}
                      onChange={onChangeMessageHandler}
                  />
                    <button onClick={onAddMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs

