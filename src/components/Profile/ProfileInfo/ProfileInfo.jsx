import React from 'react';
import classes from './ProfileInfo.module.css'


const ProfileInfo = () => {
      return (
            <div className={classes.ProfileInfo}>
                  <picture className={classes.profileTitleImg}>
                        <img className={classes.img} src="https://i.picsum.photos/id/866/800/200.jpg?hmac=yGTQW7NFC1ryFPvqrQH_uZh7cUMSIdBQe0GPLPf-v0M" alt="logo_fone"></img>
                  </picture>
                  <div className={classes.infoItem}>
                        <picture className={classes.avaItem}>
                              <img className={classes.avaImg} src="https://i.picsum.photos/id/152/200/200.jpg?hmac=jxm74qVoEmDIDdKJ1_I2QT6AhtYcq-KN75l_iotKiOw" alt="ava"></img>
                        </picture>
                        <div>
                              ava + discription
                        </div>
                  </div>
            </div>
      )
}

export default ProfileInfo;