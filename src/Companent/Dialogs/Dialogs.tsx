import React, {ChangeEvent, RefObject} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/store";



type PropsType = {
    state: DialogsPageType
    // dispatch: (action:any) => void
    updateNewDialogText:(text:string) => void
    onAddMessage:() => void
}


const Dialogs = (props: PropsType) => {

    let dialogsElements = props.state.dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id}/>)
    let messagesElements = props.state.messages.map(messages => <Message message={messages.name} id={messages.id}/>)

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let message = e.currentTarget.value ?? '';
        props.updateNewDialogText(message);
    };


    let addMessage = () => {
        props.onAddMessage()
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
                      value={props.state.newMessageText}
                      onChange={onChangeMessageHandler}
                  />
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs

