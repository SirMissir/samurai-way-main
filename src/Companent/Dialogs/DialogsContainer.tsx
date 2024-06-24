import React from "react";
import {addMessageAC, newMessageTextAC} from "../../redux/dialogs-reducer";
import {DialogsPageType, RootStateType} from "../../redux/store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



type PropsType = {
    state: RootStateType
    dispatch: (action: any) => void
}


const DialogsContainer = (props: PropsType) => {

    let onAddMessage = () => {
        let action = addMessageAC()
        props.dispatch(action)
    }

    let updateNewDialogText = (text: string) => {
        let action = newMessageTextAC(text)
        props.dispatch(action)
    }
    return (
        <Dialogs
            state={props.state.dialogsPage}
            // dispatch={props.dispatch}
            onAddMessage={onAddMessage}
            updateNewDialogText={updateNewDialogText}
        />
    )
}

let mapStateToProps = (state:RootStateType) => {
    return{
        state: state.dialogsPage
    }
}
let mapDispatchToProps = () => {
    return{
        onAddMessage: ()=>{},
        updateNewDialogText: ()=>{}
    }
}
const SuperDialogsContainer = connect (mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer

