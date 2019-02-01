import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import MyPosts from './MyPosts/MyPosts';
import Dialogs from './Dialogs/Dialogs';
import { BrowserRouter, Route } from "react-router-dom";
import Profile from './Profile/Profile';
import Navbar from './Navbar/Navbar';
import Messages from './Messages';




const App = () => {

  return (
    <BrowserRouter>
    <Messages/>
      {/* <div>
        <Navbar/>

        <Header />
        <MyPosts />
        <Route exact path ="/dialogs" component={Dialogs} />
        <Route exact path ="/profile" component={Profile} />
        

      </div>  */}
    </BrowserRouter>

  );

}



export default App;
