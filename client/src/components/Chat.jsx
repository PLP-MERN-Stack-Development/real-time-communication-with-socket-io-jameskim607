import MessageList from './MessageList';
import MessageInput from './MessageInput';
import UsersList from './UsersList';

export default function Chat({ username, messages, users, sendMessage, setTyping, typingUsers, disconnect }) {
  return (
    <div className="chat-container">
      <div className="chat-header">
        <h3>Logged in as: {username}</h3>
        <button onClick={disconnect}>Leave Chat</button>
      </div>

      <div className="chat-body">
        <UsersList users={users} typingUsers={typingUsers} />
        <MessageList messages={messages} username={username} />
      </div>

      <MessageInput sendMessage={sendMessage} setTyping={setTyping} />
    </div>
  );
}
