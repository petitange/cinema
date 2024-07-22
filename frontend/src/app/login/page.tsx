import React from 'react'
import Navbar from '@/components/Navbar';
import LoginForm from '@/components/LoginForm';

const LoginPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <LoginForm />
    </div>
  )
}

export default LoginPage;