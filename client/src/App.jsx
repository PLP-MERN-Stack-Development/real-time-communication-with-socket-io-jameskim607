import { useState } from 'react';
import { useSocket } from './socket/socket';
import Login from './components/Login';
import Chat from './components/Chat';

export default function App() {
  const { connect, disconnect, isConnected, messages, users, sendMessage, setTyping, typingUsers } = useSocket();
  const [username, setUsername] = useState('');

  const handleLogin = (name) => {
    setUsername(name);
    connect(name);
  };

  return (
    <div className="app-container">
      {!isConnected ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Chat
          username={username}
          messages={messages}
          users={users}
          sendMessage={sendMessage}
          setTyping={setTyping}
          typingUsers={typingUsers}
          disconnect={disconnect}
        />
      )}
    </div>
  );
}
