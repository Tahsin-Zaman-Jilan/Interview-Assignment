import React, { useState } from 'react';

const UserForm = () => {
  const [username, setUsername] = useState('');
  const [usermail, setUsermail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [users, setUsers] = useState([]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleUsermailChange = (event) => {
    setUsermail(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.trim() !== '') {
      const existingUserIndex = users.findIndex((user) => user.username === username);
      if (existingUserIndex !== -1) {
        const updatedUsers = [...users];
        updatedUsers[existingUserIndex] = { username, usermail, address, phone };
        setUsers(updatedUsers);
      } else {
        setUsers((prevUsers) => [...prevUsers, { username, usermail, address, phone }]);
      }
      setUsername('');
      setUsermail('');
      setAddress('');
      setPhone('');
    }
  };

  return (
    <div>
      <h3>User Information</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div style={{ marginRight: '10px' }}>
          <label>Username: </label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div style={{ marginRight: '10px' }}>
          <label>User Email: </label>
          <input type="email" value={usermail} onChange={handleUsermailChange} />
        </div>
        <div style={{ marginRight: '10px' }}>
          <label>Address: </label>
          <input type="text" value={address} onChange={handleAddressChange} />
        </div>
        <div>
          <label>Phone: </label>
          <input type="text" value={phone} onChange={handlePhoneChange} />
        </div>
        <button type="submit">Add/Update</button>
      </form>

      {users.length > 0 ? (
        <div>
          <h3>User info:</h3>
          <ul>
            {users.map((user, index) => (
              <li key={index}>
              <table class="user-info">
  <tr>
    <th>Username:</th>
    <td><span>{user.username}</span></td>
  </tr>
  <tr>
    <th>Email:</th>
    <td><span>{user.usermail}</span></td>
  </tr>
  <tr>
    <th>Address:</th>
    <td><span>{user.address}</span></td>
  </tr>
  <tr>
    <th>Phone:</th>
    <td><span>{user.phone}</span></td>
  </tr>
</table>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No info added yet.</p>
      )}
    </div>
  );
};

export default UserForm;
