export default function MessageList({ messages, username }) {
  return (
    <div className="message-list">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`message ${msg.sender === username ? 'own' : ''}`}
        >
          <strong>{msg.sender}:</strong> {msg.message}
        </div>
      ))}
    </div>
  );
}
