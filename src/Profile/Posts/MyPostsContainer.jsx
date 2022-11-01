import Avatar from '/Users/zhayn/my-app/src/Images/20_92.jpg';
import React from 'react';
import Post from './Post';
import { updateNewPostText } from '../../redux/state';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/profile-reducer';
import {connect} from "react-redux";
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
    return {
        postData:state.profilePage.postData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText:(text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);
export default MyPostsContainer;