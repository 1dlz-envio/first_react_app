import React from "react";
import classes from './newMassage.module.css';

const NewMassage = (props) => {

      // create link to text massage
      let sentMassageText = React.createRef();

      // action of sent text new masage
      let addMassage = () => {
            props.publicMassage();
      }

      //action of send typing sumbols into state.js
      let onMassageChange = () => {
            let massage = sentMassageText.current.value;
            props.updateNewMassageText(massage);
      }

      return (
            <div className={classes.newMassage}>
                  <textarea ref={sentMassageText}
                        onChange={onMassageChange}
                        value={props.dialogsPage.newMassageText}
                        className={classes.newMassage__text}
                  />
                  <button onClick={addMassage} className={classes.newMassage__btn}>Send</button>
            </div>
      )
}

export default NewMassage;