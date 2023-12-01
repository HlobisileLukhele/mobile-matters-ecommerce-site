import React, { useState } from 'react';
import {signInWithGoogle} from "./Firebase";


const Profile = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // to add your authentication logic.
    alert('Logged in successfully!');
  };

  return (
    <div>
    <div className="profile-container">
      <h2 className="login mb-4 mt-4 ">Login to Your Account</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="mb-4">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>
    <button onClick={signInWithGoogle} type="button" class="login-with-google-btn">Login with Google</button>
    </div>
  );
};

export default Profile;