import React, { Component } from 'react';


const Message = (props)=>{
  
    return(
      <div>
      <span>{props.text} by {props.name}</span>
      
      </div>
    )
  
  
}
export default Message;
