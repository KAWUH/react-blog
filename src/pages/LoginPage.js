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
      <h4 className='sign-in'>Sign in with:</h4>
      <ul className='sign-in-options'>
        <li><button onClick = {signInWithGoogle} className='login-with-google-btn'>Google</button></li>
      </ul>
    </div>
  )
}
