import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Dialogs.module.css';



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
            <div className="massage">{props.massage}</div>
      )
}

const Dialogs = (props) => {

      let dialogsItem = props.dialogsPage.dialogsData
            .map(dialog => <DialogsItem id={dialog.id} name={dialog.name} />);


      let massageElements = props.dialogsPage.massagesData
            .map(massage => <Massage massage={massage.massage} />);

      // create link to text massage
      let sentMassageText = React.createRef();

      // action of sent text new masage
      let sentMassageBtn = () => {
            let newMassageText = sentMassageText.current.value;
            alert(newMassageText);
      }

      return (
            <div className={classes.dialogs}>
                  <ul className={classes.dialogsItem}>
                        {dialogsItem}
                  </ul>
                  <div className={classes.massages}>
                        <ul className={classes.massagesElementItems}>
                              {massageElements}
                        </ul>
                        <div className={classes.newMassage}>
                              <textarea ref={sentMassageText} className={classes.newMassage__text}></textarea>
                              <button onClick={sentMassageBtn} className={classes.newMassage__btn}>Send</button>
                        </div>
                  </div>

            </div>
      )
}

export default Dialogs;