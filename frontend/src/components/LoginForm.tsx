'use client'

import { useState } from 'react';

const sendCredentials = async ({ username, password }:any) => {
  const response = await fetch('auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })

  const res = await response.json()

  return res
}

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleLogin = async (e:any) => {
    e.preventDefault();
    const response = await sendCredentials({username, password});

    if(response.statusCode === 200) {
      localStorage.setItem('token', response.access_token);
      window.history.back()
    } else {
      setMessageError('Invalid credentials');
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </button>
        {messageError && <p className="p-4 inline-block text-red-500">{messageError}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
