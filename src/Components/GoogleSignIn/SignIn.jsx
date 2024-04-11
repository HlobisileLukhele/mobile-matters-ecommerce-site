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
      <form onSubmit={signIn}>
      <h2>Log in</h2>
      <input 
      type="email" 
      placeholder='Enter your email' 
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input type="password" 
      placeholder='Enter your password' 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      ></input>
        <button type="submit"> LOGIN </button>
      </form>
    </div>
  )
}

export default SignIn
