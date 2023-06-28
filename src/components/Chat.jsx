import React, { useContext, useState } from "react";
import Back from "../img/back.png";
import Messages from "./Messages";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import Sidebar from "./Sidebar";

const Chat = () => {
  const { data } = useContext(ChatContext);
  const handleBackClick = () => {
    const sidebar = document.querySelector(".sidebar");
    const chat = document.querySelector(".chat");
 

    if (sidebar) {
      sidebar.style.display = "block";
    }
    if (chat) {
      chat.style.display = "none";
    }
  
 
  };
  return (
    <div className="chat" >
     
        <>
          <div className="chatInfo">
            <img src={Back} alt="" onClick={handleBackClick} />
            <span>{data.user?.displayName}</span>
            <div className="navbar">
              <button className="out" onClick={() => signOut(auth)}>Logout</button>
            </div>
          </div>
          <Messages />
          <Input />
        
        </>
     
    </div>
  );
};

export default Chat;
