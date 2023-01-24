import React,{ useState} from 'react';
import {Link,useNavigate} from "react-router-dom";
import { UserAuth } from '../context/Authcontext';




function Signup() {

const [email ,setEmail] = useState ('')
const [password ,setPassword] = useState ('')
const [error ,setError] = useState ('')
const {createUser} = UserAuth()
const navigate = useNavigate()

const handleSubmit = async (e) =>{
  e.preventDefault()
  setError('')
  try{
  await createUser(email, password);
  navigate('/account')
  }catch(e){
 setError(e.message)
 alert(e.message)
  }
}

  return (
    <div>
       <div>
        <h1>Sign up for a free  account</h1>
        <p>
          Already have an account?<Link to="/"> Signin</Link>
        </p>
       </div>

       <form onSubmit={handleSubmit}>
        <div>
          <label>Email Address</label>
          <input onChange={(e) =>setEmail(e.target.value)} type="email" name="email"/>
        </div>
        <div>
          <label>Password</label>
          <input onChange={(e) =>setPassword(e.target.value)} type="password" name="password"/>
        </div>
        <button>Sign Up</button>
       </form>
    </div>
  );
}

export default Signup;
