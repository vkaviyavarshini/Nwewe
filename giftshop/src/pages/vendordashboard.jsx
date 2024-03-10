import  { useState } from 'react';
import '../css/vendordashboard.css';
import { Link } from 'react-router-dom';

const UserTable = () => {
  const initialUsers = [
    { id: 1, name: 'vendor1', email: 'vendor1@example.com', phone: '9876543210', address: 'Chennai' },
    { id: 2, name: 'vendor2', email: 'vendor2@example.com', phone: '9898976767', address: 'Bangalore' },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [displayTable, setDisplayTable] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', address: '' });
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleAddUser = () => {
    setDisplayTable(false);
    setSelectedUserId(null);
  };

  const handleUpdateUser = (userId) => {
    setDisplayTable(false);
    const selectedUser = users.find((user) => user.id === userId);
    setFormData({ ...selectedUser });
    setSelectedUserId(userId);
  };

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const handleCancel = () => {
    setDisplayTable(true);
    setFormData({ name: '', email: '', phone: '', address: '' });
    setSelectedUserId(null);
  };

  const handleFormSubmit = () => {
    if (formData.name && formData.email && formData.phone && formData.address) {
      if (selectedUserId) {
        const updatedUsers = users.map((user) =>
          user.id === selectedUserId ? { id: user.id, ...formData } : user
        );
        setUsers(updatedUsers);
      } else {
        setUsers([...users, { id: users.length + 1, ...formData }]);
      }
      setFormData({ name: '', email: '', phone: '', address: '' });
      setDisplayTable(true);
      setSelectedUserId(null);
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="formm-container">
      {displayTable ? (
        <div>
          <h1 className='user-tab-title'>Vendor Dashboard</h1>
          <table className='user-tab'>
            <thead>
              <tr>
                <th className='user-tab-head'>Name</th>
                <th className='user-tab-head'>Email</th>
                <th className='user-tab-head'>Phone</th>
                <th className='user-tab-head'>Address</th>
                <th className='user-tab-head'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className='user-tab-data'>{user.name}</td>
                  <td className='user-tab-data'>{user.email}</td>
                  <td className='user-tab-data'>{user.phone}</td>
                  <td className='user-tab-data'>{user.address}</td>
                  <td className='user-tab-data'>
                  &nbsp;
                    <button  onClick={() => handleUpdateUser(user.id)}>Update</button>
                    &nbsp;
                    &nbsp;
                    <button  onClick={() => handleDeleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>  
          <button className='buttt' onClick={handleAddUser}>Add Vendor</button>
        <br/>
          <button className='user-back'>< Link to="/admin/login">Go Back</Link></button>
        </div>
      ) : (
        <div>
          <h1 className='user-tab-title'>{selectedUserId ? 'Update Vendor' : 'Add Vendor'}</h1>
          <div className='form11'>
          <form>
            <label className='label11'>
              Name:
              <input className='input11' type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            </label>
            <br/>
            <label className='label11'>
              Email:
              <input className='input11' type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            </label>
            <br/>
            <label className='label11'>
              Phone:
              <input className='input11' type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
            </label>
            <br/>
            <label className='label11'>
              Address:
              <input className='input11' type="text" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
            </label>
            <br/>
            <button type="button" onClick={handleFormSubmit}>
              {selectedUserId ? 'Update' : 'Add'}
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTable;