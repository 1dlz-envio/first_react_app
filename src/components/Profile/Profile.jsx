import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
     
      return (
            <main className={classes.mainBlock}>
                  <ProfileInfo />
                  <MyPosts postsData={props.profilePage.postsData}
                        dispatch={props.dispatch}
                        newPostText={props.profilePage.newPostText}
                  />
            </main>
      )
}

export default Profile;