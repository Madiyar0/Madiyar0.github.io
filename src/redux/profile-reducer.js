const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    postData: [
        {id: 1, newpost:'Hi, how are you'},
        {id: 2, newpost:'Hi, how are you'},
        {id: 3, newpost:'Hi, how are you'},
      ],
      newPostText:'madiyar'
};
const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id:4,
                newpost: state.newPostText
              };
              return {
                ...state,
                postData: [...state.postData, newPost],
                };
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }; 
            }
        default:
            return state;
    }
    return state;
    
}
export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
  }
  
  export const updateNewPostTextActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    }
  }
export default profileReducer;