import Avatar from '/Users/zhayn/my-app/src/Images/20_92.jpg';
import '../../../src/App.css';
import React from 'react';
import Post from './Post';
import { updateNewPostText } from '../../redux/state';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/profile-reducer';




const MyPosts = (props) => {
    
    let postElements = 
        props.postData.map( post => <Post newpost={post.newpost}/>);

    let newpostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
        newpostElement.current.value = '';
    }


    let onPostChange = () => {
        let text = newpostElement.current.value;
        props.updateNewPostText(text);
    }
    
    return (
        <div>
            <h1>Our posts</h1>
            <div className='fl'>
            <div className="flex">
                <img className='ava' src={Avatar} alt="" />
                <h2 className='h2'>Madiyar</h2>
            </div>
            <div>
                <textarea onChange={onPostChange} ref={newpostElement}></textarea>
            </div>
            <div>
                <button onClick={onAddPost}>Add posts</button>
            </div>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;