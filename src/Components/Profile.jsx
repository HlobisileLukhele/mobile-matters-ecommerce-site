import React from 'react';
import SignIn from "./GoogleSignIn/SignIn";
import SignUp from './GoogleSignIn/Signup';
import AuthDetails from './GoogleSignIn/AuthDetails';

const Profile = () => {
  return (
    <div className="profile-container">
    <SignIn />
    <SignUp />
    <AuthDetails />
    </div>
  );
};

export default Profile;
  