import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Dialogs.module.css';

const DialogsItem = (props) => {

      let path =  '/dialogs/' + props.id ;
      
      return (
            <li className={classes.item}>
                  <NavLink to={path} className={classes.userItem}>{props.name}</NavLink>
            </li>
      )
}

const Massage = (props) => {
      return (
            <div className="massage">{props.massage}</div>
      )
}

const Dialogs = (props) => {
      return (
            <div className={classes.dialogs}>
                  <ul className={classes.dialogsItem}>
                        <DialogsItem id='1' name = 'Igor'/>
                        <DialogsItem id='2' name ='Klark' />
                        <DialogsItem id='3' name ='Vlad' />
                        <DialogsItem id='4' name ='Fred' />
                        <DialogsItem id='5' name ='Brok' />
                        
                  </ul>
                  <div className="massages">
                        <Massage massage='Hello world!' />
                        <Massage massage='How are you?' />
                        <Massage massage='I`m OK' />
                  </div>
            </div>
      )
}

export default Dialogs;