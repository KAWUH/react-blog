import React from 'react'
import { auth, provider } from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function LoginPage({isLoggedIn, setIsLoggedIn}) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true)
      setIsLoggedIn(true);
      navigate("/");
    })
  }

  return (
    <div className='loginPage'>
      <p>Sign In with Google</p>
      <button onClick = {signInWithGoogle} className='login-with-google-btn'>Sign In</button>
    </div>
  )
}
