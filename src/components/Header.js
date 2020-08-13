import React from 'react';

export default function Header({ user, setUser }) {
  return (
    <header>
      <h3>Welcome, {user}</h3>
      <button onClick={() => setUser('')}>Logout</button>
    </header>
  );
}
