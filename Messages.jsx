import React, { Component } from 'react';
import Message from "./Message";

let messagesText = [
  {text:"You are genious!", name:"Sasha"}, 
  {text:"Thanks, I know", name:"Tanya"}
];
let messages = messagesText.map( (elem)=>{
  return(
    <Message text={elem.text} name={elem.name}/>
  )
});

// let messages = [<Message text="You are genious!"/>, <Message text="Thanks, I know"/>];

const Messages = ()=>{
  
    return(
      <div>
       {messages}
       
      </div>
    )
  
  
}
export default Messages;
