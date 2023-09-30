import React, { useState } from 'react';
import './index.css';

function App() {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState('');

  const handleAddUser = () => {
    if (username.trim() === '' || age === '') {
      setError('Please enter both username and age.');
      return;
    }

    if (parseInt(age) < 0) {
      setError('Age cannot be less than 0.');
      return;
    }

    const newUser = {
      username: username,
      age: age,
    };

    setUserList([...userList, newUser]);
    setUsername('');
    setAge('');
    setError('');
  };

  return (
    <div className="App">
      <h1>User List</h1>
      {error && <p className="error">{error}</p>}
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <button onClick={handleAddUser}>Add User</button>

      <div className="user-list">
        {userList.map((user, index) => (
          <div key={index} className="user-item">
            <p>Username: {user.username}</p>
            <p>Age: {user.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
