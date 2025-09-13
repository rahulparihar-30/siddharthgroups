import React, { useState, useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";
import "./styling/Chat.css";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Chat = () => {
  const [isExpanded, setExpanded] = useState(false);
  const chatRef = useRef(null);

  const handleClick = () => {
    setExpanded((prev) => !prev);
  };

  // close when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (chatRef.current && !chatRef.current.contains(e.target)) {
        setExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isExpanded]);

  return (
    <div ref={chatRef}>
      {/* Main Bubble */}
      <div
        className="cursor-pointer fixed bottom-6 right-6 p-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
        onClick={handleClick}
      >
        {isExpanded ? <ExpandMoreIcon /> : <MessageCircle color="white" />}
      </div>

      {/* Expanded Options */}
      {isExpanded && (
        <>
          <a
            href="tel:+918805360894"
            className="cursor-pointer p-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-full shadow-lg transition-transform duration-300 hover:scale-110 fixed bottom-21 right-5"
          >
            <CallIcon />
          </a>
          <a
            href="mailto:siddharthgroups@gmail.com"
            className="cursor-pointer p-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-full shadow-lg transition-transform duration-300 hover:scale-110 fixed bottom-21 right-5 fixed bottom-37 right-5"
          >
            <EmailIcon />
          </a>
        </>
      )}
    </div>
  );
};

export default Chat;
