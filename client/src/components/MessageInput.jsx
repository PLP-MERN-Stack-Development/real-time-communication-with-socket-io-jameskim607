import { useState } from 'react';

export default function MessageInput({ sendMessage, setTyping }) {
  const [message, setMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessage(message);
      setMessage('');
      setTyping(false);
    }
  };

  return (
    <form onSubmit={handleSend} className="message-input">
      <input
        type="text"
        value={message}
        placeholder="Type a message..."
        onChange={(e) => {
          setMessage(e.target.value);
          setTyping(true);
        }}
        onBlur={() => setTyping(false)}
      />
      <button type="submit">Send</button>
    </form>
  );
}
