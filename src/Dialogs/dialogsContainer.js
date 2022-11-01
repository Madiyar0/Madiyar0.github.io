import React from 'react';
import '../Dialogs/dialogs.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../redux/dialogs-reducer';
import {connect} from "react-redux";
import Dialogs from './dialogs';


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        SendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;