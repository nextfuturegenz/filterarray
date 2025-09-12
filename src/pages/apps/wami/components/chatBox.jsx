// src/components/ChatBox.js
import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const styles = {
  chatBox: {
    height: '95%',
    display: 'flex',
    flexDirection: 'column',
  },
  chatSection: {
    //flex: 1,
    marginTop:'10px',
    height:'90vh',
    overflowY: 'auto',
    padding: '10px',
    //borderBottom: '1px solid #ddd',
  },
  chatBubble: {
    maxWidth: '70%',
    marginBottom: '10px',
    padding: '8px',
    borderRadius: '8px',
  },
  leftChatBubble: {
    backgroundColor: '#a2d8d2',
    marginRight: 'auto',
  },
  rightChatBubble: {
    backgroundColor: '#d4edda',
    marginLeft: 'auto',
  },
  inputGroup: {
    padding: '10px',
    backgroundColor: '#f8f9fa',
    position: 'sticky',
    bottom: 0,
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
};

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'John', text: 'Hi there!' },
  { id: 2, sender: 'You', text: 'Hello! How are you?' },
  { id: 3, sender: 'John', text: 'I wanted to tell you about the new ChatGPT-4 classes.' },
  { id: 4, sender: 'You', text: 'Oh, really? How are they going?' },
  { id: 5, sender: 'John', text: 'They are fantastic! The material is so comprehensive, and the instructors are amazing.' },
  { id: 6, sender: 'You', text: 'That sounds great! What topics are you covering?' },
  { id: 7, sender: 'John', text: 'We are diving deep into advanced language processing, natural language understanding, and much more.' },
  { id: 8, sender: 'You', text: 'Wow, that sounds fascinating! I should consider joining those classes.' },
  { id: 9, sender: 'John', text: 'Absolutely! Its an incredible learning experience.' },
  { id: 10, sender: 'John', text: 'Hi there!' },
  { id: 12, sender: 'You', text: 'Hello! How are you?' },
  { id: 13, sender: 'John', text: 'I wanted to tell you about the new ChatGPT-4 classes.' },
  { id: 14, sender: 'You', text: 'Oh, really? How are they going?' },
  { id: 15, sender: 'John', text: 'They are fantastic! The material is so comprehensive, and the instructors are amazing.' },
  { id: 16, sender: 'You', text: 'That sounds great! What topics are you covering?' },
  { id: 17, sender: 'John', text: 'We are diving deep into advanced language processing, natural language understanding, and much more.' },
  { id: 18, sender: 'You', text: 'Wow, that sounds fascinating! I should consider joining those classes.' },
  { id: 21, sender: 'John', text: 'Hi there!' },
  { id: 22, sender: 'You', text: 'Hello! How are you?' },
  { id: 23, sender: 'John', text: 'I wanted to tell you about the new ChatGPT-4 classes.' },
  { id: 24, sender: 'You', text: 'Oh, really? How are they going?' },
  { id: 25, sender: 'John', text: 'They are fantastic! The material is so comprehensive, and the instructors are amazing.' },
  { id: 26, sender: 'You', text: 'That sounds great! What topics are you covering?' },
  { id: 27, sender: 'John', text: 'We are diving deep into advanced language processing, natural language understanding, and much more.' },
  { id: 28, sender: 'You', text: 'Wow, that sounds fascinating! I should consider joining those classes.' },
  
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim() !== '') {
      const updatedMessages = [...messages, { id: messages.length + 1, sender: 'You', text: newMessage }];
      setMessages(updatedMessages);
      setNewMessage('');
    }
  };

  return (
    <div style={styles.chatBox}>
      <div style={styles.chatSection}>
        {messages.map((message) => (
          <div
            key={message.id}
            style={{
              ...styles.chatBubble,
              ...(message.sender === 'You' ? styles.rightChatBubble : styles.leftChatBubble),
            }}
          >
            <strong>{message.sender}:</strong> {message.text}
          </div>
        ))}
      </div>
      <div style={styles.inputGroup} className="d-flex">
        <input
        style={{height:'100%', width:'85%'}}
          type="text"
          className="form-control"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button style={{ width: '15%', marginLeft: '10px' }} className="btn btn-primary btn-sm" type="button" onClick={handleSend}>
            <FaPaperPlane />
          </button>
      </div>
    </div>
  );
};

export default ChatBox;
