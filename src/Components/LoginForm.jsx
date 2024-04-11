import React from 'react';

function LoginForm() {

  return (
    <div>
    <div className="profile-container">
      <h2 className="login mb-4 mt-4 ">Login to Your Account</h2>
      <form className="login-form">
        <div className="mb-4">
          <label htmlFor="email" className="form-label">
            Username:
          </label>
          <input
            type="text"
            id="email"
            className="form-control"
            required
            placeholder='Your email'
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            required
            placeholder='Password'
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit">LOGIN</button>
        </div>
      </form>
    </div>
    <button type="button" class="login-with-google-btn">Login with Google</button>
    </div>
  );
};
export default LoginForm;