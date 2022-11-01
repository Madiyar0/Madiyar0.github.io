const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let initialState = {
    dialogsData: [
        {id:1, name:'Nurasyl'},
        {id:2, name:'Ali'},
        {id:3, name:'Adik'},
      ],
      messageData: [
        {id:1, message:'Hi'},
        {id:2, message:'Hi how are u'},
        {id:3, message:'Hi salam'},
      ],
      newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody:'',
                messageData: [...state.messageData, {id:4, message:body}]
            };
        default:
            return state;
    }
}
export const sendMessageCreator = () => {
    return {
        type: 'SEND_MESSAGE'
    }
  }
  
  export const updateNewMessageBodyCreator = (body) => {
    return {
        type: 'UPDATE_NEW_MESSAGE_BODY',
        body: body
    }
  }
export default dialogsReducer;