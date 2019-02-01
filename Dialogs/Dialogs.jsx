import React, { Component } from 'react';
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = () => {

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={classes.dialog +" "+classes.active}>
         <NavLink to="/dialogs/1"> Sasha</NavLink>
        </div>
        <div className={classes.dialog}>
        <NavLink to="/dialogs/2">Papa</NavLink>
        </div>
        <div className={classes.dialog}>
        <NavLink to="/dialogs/3">Mama</NavLink>
        </div>
        <div className={classes.dialog}>
        <NavLink to="/dialogs/555">Tanya</NavLink>
        </div>
      </div>
        <div className={classes.messages}>
            <div className={classes.message}>Hi</div>
            <div className={classes.message}>Hello</div>
            <div className={classes.message}>Fucl them all</div>
        </div>
    </div>
  )


}
export default Dialogs;
