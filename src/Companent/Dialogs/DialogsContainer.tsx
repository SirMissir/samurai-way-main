import React from "react";
import {addMessageAC, newMessageTextAC} from "../../redux/dialogs-reducer";
import {DialogsPageType} from "../../redux/store";
import Dialogs from "./Dialogs";



type PropsType = {
    state: DialogsPageType
    dispatch: (action:any) => void
}


const DialogsContainer = (props: PropsType) => {

    let onAddMessage = (text:string) => {
        let action = addMessageAC(text)
        props.dispatch(action)
    }

    let updateNewDialogText = (text:string) => {
        let action = newMessageTextAC(text)
        props.dispatch(action)
    }
    return (
        <Dialogs
            state={props.state}
            dispatch={props.dispatch}
            onAddMessage={onAddMessage}
            updateNewDialogText={updateNewDialogText}
        />
    )
}

export default DialogsContainer

