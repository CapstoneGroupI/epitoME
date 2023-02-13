import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';


const Localstoragetest = () => {
  const [messages, setMessages] = useState([]);
  const [newMessageText, setNewMessageText] = useState('');
  const [newMessageSender, setNewMessageSender] = useState('');

  const Message = ({ text, sender }) => (
    <div>
      <strong>{sender}:</strong> {text}
    </div>
  );
    
  localStorage.setItem("messages", JSON.stringify(messages))

  useEffect(() => {
    const storedMessages = localStorage.getItem('messages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    setMessages([...messages, { text: newMessageText, sender: newMessageSender }]);
    setNewMessageText('');
    setNewMessageSender('');

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={newMessageSender}
          onChange={event => setNewMessageSender(event.target.value)}
        />
        <input
          type="text"
          placeholder="Your message"
          value={newMessageText}
          onChange={event => setNewMessageText(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      {messages.map((message, index) => (
        <Message key={index} text={message.text} sender={message.sender} />
      ))}
    </div>
  );
};
}

export default Localstoragetest