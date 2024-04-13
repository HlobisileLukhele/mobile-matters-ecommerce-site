import React from 'react';
import SignUp from './GoogleSignIn/Signup';
import AuthDetails from './GoogleSignIn/AuthDetails';

const Profile = () => {
  return (
    <div className="profile-container">
    <SignUp />
    <br />
    <AuthDetails />
    </div>
  );
};

export default Profile;
  