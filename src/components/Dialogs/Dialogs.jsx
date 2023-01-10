import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Dialogs.module.css';
import NewMassage from "./newMassage/newMassage.jsx";



const DialogsItem = (props) => {


      let path = '/dialogs/' + props.id;

      return (
            <li className={classes.item}>
                  <NavLink to={path} className={classes.userItem}>{props.name}</NavLink>
            </li>
      )
}

const Massage = (props) => {
      return (
            <div className={classes.massage__text}>{props.massage}</div>
      )
}

const Dialogs = (props) => {

      let dialogsItem = props.dialogsPage.dialogsData
            .map(dialog => <DialogsItem id={dialog.id} name={dialog.name} />);


      let massageElements = props.dialogsPage.massagesData
            .map(massage => <Massage massage={massage.massage} />);



      return (
            <div className={classes.dialogs}>
                  <ul className={classes.dialogsItem}>
                        {dialogsItem}
                  </ul>
                  <div className={classes.massages}>
                        <ul className={classes.massagesElementItems}>
                              {massageElements}
                        </ul>
                        <NewMassage dialogsPage={props.dialogsPage}
                              dispatch={props.dispatch}
                        />
                  </div>

            </div>
      )
}

export default Dialogs;