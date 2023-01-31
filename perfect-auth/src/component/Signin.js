import {motion} from 'framer-motion'
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from '../context/Authcontext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const {signIn}  = UserAuth()
  const notify = () =>{
    toast('successfully logged in')
  }
const handleSubmit = async (e) => {
e.preventDefault();
setError('')
try{
await signIn
(email, password)
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
        <button className='btn1' onClick={notify} >Sign In</button>
        </div>
      </form>
      </div>
        <div>
        <img className='contact-wrapper2' src='./image/pngwing.com.png' alt='' />
        </div>
        <ToastContainer />
    </motion.div>

  );
}

export default Signin;
