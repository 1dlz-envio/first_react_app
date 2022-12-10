import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = () => {
      return (
            <main className={classes.mainBlock}>
                  <ProfileInfo/>
                  <MyPosts/>  
            </main>
      )
}

export default Profile;