import React from "react";
import Chatapp from "./chatapp";
import "./styles/Chatappstyle.css";
import { useEffect } from "react";

const Message = () => {
  useEffect(() => {
    // Set the overflow property on the body element
    document.body.style.overflow = "hidden";

    // Clean up the effect when the component unmounts
    return () => {
      document.body.style.overflow = "auto"; // Reset to default
    };
  }, []);
  return (
    <div
      className="container-chats"
      style={{ overflow: "hidden", height: "100vh" }}
    >
      <Chatapp />
    </div>
  );
};

export default Message;