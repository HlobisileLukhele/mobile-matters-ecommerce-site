import React from 'react';
import SignIn from './GoogleSignIn/SignIn';
import  "./Profile.css";

const Profile = () => {
  return (
    <div className="container-fluid align-items-center">  
   <SignIn />
    </div>
  );
};

export default Profile;
  