import React from "react";
import {addMessageAC, newMessageTextAC} from "../../redux/dialogs-reducer";
import {DialogsPageType} from "../../redux/store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


type PropsType = {
    state: DialogsPageType
    dispatch: (action: any) => void
}


const DialogsContainer = (props: PropsType) => {

    let onAddMessage = (text: string) => {
        let action = addMessageAC(text)
        props.dispatch(action)
    }

    let updateNewDialogText = (text: string) => {
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

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = () => {
    return {
        updateNewDialogText: ()=>{},
        onAddMessage: ()=>{}
    }
}

const SuperDialogsContainer = connect(mapStateToProps , mapDispatchToProps)(Dialogs);

export default DialogsContainer

