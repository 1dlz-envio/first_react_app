import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/ProfileReducer';
import MyPosts from './MyPosts';



const MyPostsContainer = (props) => {

      let state = props.store.getState();

      // function of action after you press publicPost button
      let addPost = () => {
            // put value from textarea to alert massage
            props.store.dispatch(addPostActionCreator());
      };

      // send input sumbols into STATE

      let onPostChange = (text) => { props.store.dispatch(updateNewPostTextActionCreator(text)) }

      return (<MyPosts updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.postsData}
            newPostText={state.profilePage.newPostText} />)
}

export default MyPostsContainer;