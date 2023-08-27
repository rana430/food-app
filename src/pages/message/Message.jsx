import React from 'react'
import Chatapp from './chatapp'

const Message = () => {
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
    <Chatapp/>
  )
}

export default Message
