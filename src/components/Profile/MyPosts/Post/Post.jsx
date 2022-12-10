import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
      return (
            <div className={classes.item}>
                  <img src="https://photoshablon.com/_ph/44/193521795.jpg" alt="user_avatar"></img>
                  <div className={classes.item__box}>
                        <p className={classes.text}>{props.massages}</p>
                        <span className={classes.like}>Like {props.likesCount}</span>
                  </div>
            </div>
      )
}

export default Post;