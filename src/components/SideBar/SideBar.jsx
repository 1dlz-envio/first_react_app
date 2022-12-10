import React from 'react';
import classes from './SideBar.module.css'
import { NavLink } from 'react-router-dom';

const Dialogs = () => {
      return (
            <aside className={classes.sideBar}>
                  <nav className={classes.navBar}>
                        <ul className={classes.itemColumn}>
                              <li className={classes.item}>
                                    <NavLink to='/profile' className={navData => navData.isActive ? classes.active : classes.item} >Profile</NavLink>
                              </li>
                              <li className={classes.item}>
                                    <NavLink to='/dialogs' className={navData => navData.isActive ? classes.active : classes.item}>Dialogs</NavLink>
                              </li>
                              <li className={classes.item}>
                                    <NavLink to='/news' className={navData => navData.isActive ? classes.active : classes.item}>News</NavLink>
                              </li>
                              <li className={classes.item}>
                                    <NavLink to='/music' className={navData => navData.isActive ? classes.active : classes.item}>Music</NavLink>
                              </li>
                        </ul>
                        <div className={classes.sideBar__settings}>
                              <NavLink to='/settings' className={navData => navData.isActive ? classes.active : classes.item}>Settings</NavLink>
                        </div>
                  </nav>
            </aside>
      )
}

export default Dialogs;