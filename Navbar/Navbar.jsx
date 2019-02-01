import React, { Component } from 'react';
import classes from "./Navbar.module.css";
import Profile from '../Profile/Profile';

const Navbar = ()=>{
    return(
        <div className = {classes.nav}>
           <Profile/>

        </div>
    )
}

export default Navbar;