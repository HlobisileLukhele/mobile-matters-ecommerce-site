import { signInWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from 'react';
import { auth } from './Firebase';

//initialised user email and passwords objects
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //function handle sign in with user credentials and prevent loading and submit event 
    const signIn = (e) => {
       e.preventDefault();
       signInWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
        console.log(userCredential)
       }).catch((error) =>  {
        console.log(error);
       })
    }

    //created form to display  input fields for email and password

  return (
     <div className='sign-in-container'>
      <form onSubmit={signIn} id="signin">
      <h2 className="login mt-5 pb-4">Log in To your Account </h2>
      <label htmlFor="email" className="form-label font-medium"> Email Address: </label>
      <input 
      className='form-control ' 
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
      placeholder='Enter your password' 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      ></input>
      <span className="signin-link d-flex align-right  bg-gray-600 mb-3 mt-2 "><i>Forgot Password</i></span>
      <button type="submit btn btn-primary border-radius-4 pt-2" className='btn btn-primary'> Sign In </button>
    
      </form>
      <p className='mt-4 text-center'>Don't have an account?</p> 
      <p><a href="Signup" className="font-weight-bold pb-2 "><u>Sign Up</u></a></p>
      <hr />
    </div>
  )
}

export default SignIn
