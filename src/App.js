import React, { useState } from 'react';
import Login from './components/Login';

export default function App() {
  const [user, setUser] = useState('');

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return <div>app</div>;
}
