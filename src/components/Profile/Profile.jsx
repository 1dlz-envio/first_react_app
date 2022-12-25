import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

      return (
            <main className={classes.mainBlock}>
                  <ProfileInfo />
                  <MyPosts postsData={props.profilePage.postsData}
                        publicPost={props.publicPost}
                        newPostText={props.profilePage.newPostText}
                        updateNewPostText={props.updateNewPostText}
                  />
            </main>
      )
}

export default Profile;