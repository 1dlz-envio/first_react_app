import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './FriendItem.module.css';

const FriendItem = (props) => {

      let path = '/dialog/' + props.id;

      return (
            <li className={classes.friendsBlock__unit}>
                  <NavLink to={path} className={classes.friendsBlock__link}>
                        <picture className={classes.friendsBlock__logoBox}>
                              <img className={classes.logoBox__img} src="https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg" alt="friends avatar" />
                        </picture>
                        <span className={classes.friendsBlock__nameOfFriend}>{props.name}</span>
                  </NavLink>
            </li>
      )
}

export default FriendItem;