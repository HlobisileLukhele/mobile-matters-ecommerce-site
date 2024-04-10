import React, { useState } from 'react';
import { AuthErrorCodes, getAuth, signInWithEmailAndPassword } from "firebase/auth";

function LoginForm() {
  const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  // Initialize auth instance
  const auth = getAuth();

  // Handle form submit
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    const email = input.email.toLocaleLowerCase().trim();
    const password = input.password;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Sign in
        console.log(userCredential.user);
        // ...
      })
      .catch((error) => {
        if (
          error.code === AuthErrorCodes.INVALID_PASSWORD ||
          error.code === AuthErrorCodes.USER_DELETED
        ) {
          setError("The email or password is incorrect");
        } else {
          console.log(error.code);
          alert(error.code);
        }
      });
  };


  return (
    <div>
    <div className="profile-container">
      <h2 className="login mb-4 mt-4 ">Login to Your Account</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="mb-4">
          <label htmlFor="email" className="form-label">
            Username:
          </label>
          <input
            type="text"
            id="email"
            value={input}
            onChange={(e) => setInput(e.target.value)}
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
            value={input}
            onChange={(e) => setInput(e.target.value)}
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