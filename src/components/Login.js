import React, { useState } from 'react';

export default function Login({ setUser }) {
  const [username, setUsername] = useState('');

  const handleChange = ({ target: { value } }) => {
    setUsername(value);
  };

  const handleSumbmit = (e) => {
    e.preventDefault();
    setUser(username);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSumbmit}>
        <input
          placeholder='Input Username'
          name='username'
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
