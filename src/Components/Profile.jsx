import React from 'react';
import LoginForm from './LoginForm'
import {signInWithGoogle} from "./Firebase";


const Profile = () => {
  return (
    <div className="profile-container">
    <LoginForm />
    </div>
  );
};

export default Profile;
  