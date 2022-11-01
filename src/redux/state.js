import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
let store = {
  _state: {
    profilePage: {
        postData: [
          {id: 1, newpost:'Hi, how are you'},
          {id: 2, newpost:'Hi, how are you'},
          {id: 3, newpost:'Hi, how are you'},
        ],
        newPostText:'madiyar'
    },
    messagesPage: {
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
    },     
  },
  getState(){
    return this._state;
  },

  _rerenderEntireTree() {
    console.log('State changed');
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);

    this._rerenderEntireTree(this._state);
  }
}





  
//   let messageData = [
//     {id:1, message:'Hi'},
//     {id:2, message:'Hi how are u'},
//     {id:3, message:'Hi salam'},
//   ]





 



  
  export default store;