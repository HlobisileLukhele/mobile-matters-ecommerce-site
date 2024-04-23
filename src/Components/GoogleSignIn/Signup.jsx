import { createUserWithEmailAndPassword} from 'firebase/auth';
import React, {useState} from 'react';
import { auth } from './Firebase';

  //initialised user email and password
  const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  //function handle sign in with user credentials and prevent loading and submit event 
    const signUp = (e) => {
       e.preventDefault();
       createUserWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
        console.log(userCredential)
       }).catch((error) =>  {
        console.log(error);
       })
    }

  //created form to display  input fields for email and password
  return (
     <div className='sign-in-container'>
      <form onSubmit={signUp} id="signup">
      <h2 className="create-account pb-3 font-serif ">Create Account</h2> 
      <label htmlFor="email" className="form-label font-medium "> Email Address : </label>
      <input 
      required
      className='form-control' 
      type="text" 
      id="email"
      placeholder='Enter your email' 
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      ></input>
      <label htmlFor="email" className="form-label font-medium"> Password: </label>
      <input 
      className='form-control ' 
      type="password"
      id="password"
      required
      placeholder='Enter your password' 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      >
      </input>
      <span className="signin-link d-flex align-right pb-2 pl-2  ">
      Already have an account,  
      <a href="signin"> <i> login</i></a>
      </span>
      <button type="submit" className="btn btn-primary mt-3 mb-2 font-medium "> Sign Up </button>
      <br />
      <button type="button" class="login-with-google-btn mt-1 mb-4 ">Login with Google</button>

      </form>
      <hr />
    </div>
  )
}

export default SignUp
