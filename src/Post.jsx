import React from 'react';

const Post = (props) => {
    return(
        <div className='debug'>
            {[props.message]}
            {[props.like]}
        </div>
    )
}


export default Post;