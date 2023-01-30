import {motion} from 'framer-motion'
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from '../context/Authcontext';

function Signin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { SignIn } = UserAuth();

const handleSubmit = async() => {
email.preventDefault();
setError('')
try{
await SignIn(email, password)
navigate('/account')
}catch(e){
  setError(e.message)
  alert(e.message)
}
}

  return (

    <motion.div className='contact-container '
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{Y:0,transition:{duration:1.5}}}>
      <div className='contact-wrapper1'>
      <div>
        <h1 className='contact-header'>Sign into your account</h1>
        <p className='contact-text'>
          Dont have an account?<Link className='link' to="/signup"> Signup</Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='contact-input'>
          <label>Email ........</label>
          <input onChange={(e) =>setEmail(e.target.value)} type="email" name="email" />
        </div>
        <div className='contact-input'>
          <label>Password</label>
          <input onChange={(e) =>setPassword(e.target.value)} type="password" name="email" />
        </div>
        <div className="middle">
        <button className='btn1'>Sign In</button>
        </div>
      </form>
      </div>
        <div>
        <img className='contact-wrapper2' src='./image/pngwing.com.png' alt='' />
        </div>
    </motion.div>

  );
}

export default Signin;
