export default function UsersList({ users, typingUsers }) {
  return (
    <div className="users-list">
      <h4>Online Users</h4>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.username} {typingUsers.includes(u.username) && <em>(typing...)</em>}
          </li>
        ))}
      </ul>
    </div>
  );
}
