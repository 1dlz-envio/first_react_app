import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';


const MyPosts = (props) => {
      debugger;
      let postsItem = props.postsData.map(post => <Post massages={post.postMassages} likesCount={post.likeCount} />);

      // create link into textarea 
      let newPostElement = React.createRef();

      // function of action after you press publicPost button
      let addPost = () => {

            // put value from textarea to alert massage
            props.dispatch({ type: 'PUBLIC-POST' });

      };

      // send input sumbols into STATE

      let onPostChange = () => {

            let text = newPostElement.current.value;
            props.dispatch({
                  type: 'UPDATE-NEW-POST-TEXT',
                  newText: text,
            });


      }

      return (
            <div>
                  <div className={classes.newPost}>
                        <h3 className={classes.newPostTitle}>My Post</h3>
                        <textarea ref={newPostElement}
                              onChange={onPostChange}
                              className={classes.newPostMassage}
                              value={props.newPostText}
                        />
                        <button onClick={addPost} className={classes.newPostButton}>Add Post</button>
                  </div>
                  {postsItem}
            </div>
      )
}

export default MyPosts;