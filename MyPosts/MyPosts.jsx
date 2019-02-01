import React, { Component } from 'react';
import classes from './MyPosts.module.css';
import Post from '../Post/Post';



const MyPosts = () => {

  return (
    <div>
      <div>My posts
      <textarea></textarea>
        <button>Add button</button>
      </div>
      <div className={classes.posts}>
        <Post message="FFFFFF" />
        <Post message="ooooooooooo" />
        
      </div>

    </div>




  )

}
export default MyPosts;
