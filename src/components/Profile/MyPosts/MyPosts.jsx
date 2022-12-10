import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';


const MyPosts = () => {
      return (
            <div>
                  <div className={classes.newPost}>
                        <div>My Post</div>
                        <textarea></textarea>
                        <button>Add Post</button>
                  </div>
                  <Post massages='Hello world!' likesCount='24' />
                  <Post massages='How yo doing' likesCount='4'/>
            </div>
      )
}

export default MyPosts;