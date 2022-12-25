import React from 'react';
import FriendItem from './FriendItem/FriendItem.jsx';
import classes from './FriendsBlock.module.css';


const FriendsBlock = (props) => {
      let friendList = props.dialogsPage.dialogsData.map(friend => <FriendItem id={friend.id} name={friend.name} />)
      return (
            <section className={classes.friendsBlock}>
                  <h2 className={classes.friendsBlock__title}>Friends</h2>
                  <ul className={classes.friendsBlock__items}>
                        {friendList}
                  </ul>
            </section>
      )
}

export default FriendsBlock;