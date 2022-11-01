import React from 'react';
import '../Dialogs/dialogs.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../redux/dialogs-reducer';

const DialogItem = (props) => {
    return (
        <NavLink to={'/dialogs/' + props.id} exact activeClassName="active">{props.name}</NavLink>
    )
}

const Messages = (props) => {
    return (
        <div className="message">
                    {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    let state = props.messagesPage;
    let dialogsElements = state.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messageElements = state.messageData.map( message => <Messages message={message.message}/>)
    let newMessageBody = state.newMessageBody;

    
    let onSendMessageClick = () => {
        props.SendMessage();
    }
    let onChangeMessageClick = (e) => {
       let body = e.target.value;
       props.updateNewMessageBody(body);
    }
    return (
        <div className="dialogs">
            <div className="dialog-names">
                {dialogsElements}
            </div>

            <div className="messages">
                <div>{messageElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onChangeMessageClick} placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>SEND</button></div>
                </div> 
            </div>       
        </div>
    )
}

export default Dialogs;