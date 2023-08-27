import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can add your authentication logic.
    alert('Logged in successfully!');
  };

  return (
    <div className="login-form">
      <h2>Login to Your Account</h2>
      <form onSubmit={handleLogin}>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
