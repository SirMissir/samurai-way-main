import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {addMessageAC, InitialMessagesStateType, newMessageTextAC} from "../../redux/dialogs-reducer";
import {Dispatch} from "redux";

export type DialogsPropsType = InitialMessagesStateType & MapDispatchToPropsType

type MapDispatchToPropsType = {
    onAddMessage:()=>void
    updateNewDialogText: (newText:string)=>void
}

let mapStateToProps = (state:AppStateType):InitialMessagesStateType => {
    return{
        dialogs:state.dialogsPage.dialogs,
        messages:state.dialogsPage.messages,
        newMessageText:state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    return{
        onAddMessage: ()=>{
            dispatch(addMessageAC())
        },
        updateNewDialogText: (newText:string)=>{
            dispatch(newMessageTextAC(newText))
        }
    }
}
const SuperDialogsContainer = connect (mapStateToProps,mapDispatchToProps)(Dialogs);

export default SuperDialogsContainer

