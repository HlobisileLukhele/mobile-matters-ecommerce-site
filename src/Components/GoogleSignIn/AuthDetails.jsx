import React, {useEffect, useState} from 'react'
import {auth}  from './Firebase';
import { onAuthStateChanged,signOut } from 'firebase/auth';


//initialize authUser
const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null);
            }
        });
        return () => {
            listen();
        }
    }, []);

    //declare signout function, console log and catch error
    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('signed out successful')
        }).catch(error => console.log(error))
    }
    
//display the auth user when signed in
  return (
    <div>
      { authUser ? <><p>{`Welcome ${authUser.email}`} </p><button onClick={userSignOut}>Sign Out</button></> : <p>Signed Out </p>}
    </div>
  )
}

export default AuthDetails
