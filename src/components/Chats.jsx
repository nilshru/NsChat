import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return unsub;
    };

    if (currentUser.uid) {
      const unsubscribe = getChats();
      return unsubscribe;
    }
  }, [currentUser.uid]);

  const handleUserChatClick = () => {
    const sidebar = document.querySelector(".sidebar");
    const chat = document.querySelector(".chat");
    // const chats = document.querySelector(".chats");
    

    if (sidebar) {
      sidebar.style.display = "none";
    }
    if (chat) {
      chat.style.display = "block";
    }
    // if (chats) {
    //   chats.style.display = "block";
    // }
  
 
  };

  return (
    <div className="chats">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            className="userChat"
            key={chat[0]}
            onClick={() => {
              handleSelect(chat[1].userInfo);
              handleUserChatClick();
            }}
          >
            <img src={chat[1].userInfo.photoURL} alt="" />
            <div className="userChatInfo">
              <span>{chat[1].userInfo.displayName}</span>
              <p>{chat[1].lastMessage?.text}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chats;
