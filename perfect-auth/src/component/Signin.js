import { async } from '@firebase/util';
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

    <div>
      <div>
        <h1>Sign into your account</h1>
        <p>
          Dont have an account yet?<Link to="/signup"> Signup</Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email Address</label>
          <input onChange={(e) =>setEmail(e.target.value)} type="email" name="email" />
        </div>
        <div>
          <label>Password</label>
          <input onChange={(e) =>setPassword(e.target.value)} type="password" name="email" />
        </div>
        <button>Sign In</button>
      </form>
    </div>

  );
}

export default Signin;
