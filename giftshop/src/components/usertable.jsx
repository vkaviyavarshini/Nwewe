import  { useState } from 'react';

const UserTable = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St' },
    // Add more user details as needed
  ]);

  const [newUser, setNewUser] = useState({ name: '', email: '', phone: '', address: '' });
  const [editingUserId, setEditingUserId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleAddUser = () => {
    setUsers((prevUsers) => [...prevUsers, { id: Date.now(), ...newUser }]);
    setNewUser({ name: '', email: '', phone: '', address: '' });
  };

  const handleEditUser = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    setNewUser(userToEdit);
    setEditingUserId(id);
  };

  const handleUpdateUser = () => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === editingUserId ? { ...user, ...newUser } : user))
    );
    setNewUser({ name: '', email: '', phone: '', address: '' });
    setEditingUserId(null);
  };

  const handleDeleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h1>User Details</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>
                <button onClick={() => handleEditUser(user.id)}>Edit</button>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <h2>{editingUserId ? 'Edit User' : 'Add User'}</h2>
        <label>
          Name:
          <input type="text" name="name" value={newUser.name} onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type="text" name="email" value={newUser.email} onChange={handleInputChange} />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" value={newUser.phone} onChange={handleInputChange} />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={newUser.address} onChange={handleInputChange} />
        </label>
        {editingUserId ? (
          <button onClick={handleUpdateUser}>Update User</button>
        ) : (
          <button onClick={handleAddUser}>Add User</button>
        )}
      </div>
    </div>
  );
};

export default UserTable;
