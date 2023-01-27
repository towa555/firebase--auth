import React,{ useState} from 'react';
import {Link,useNavigate} from "react-router-dom";
import { UserAuth } from '../context/Authcontext';




function Signup() {

const [email ,setEmail] = useState ('')
const [password ,setPassword] = useState ('')
const [error ,setError] = useState ('')
const [message, setMessage] = useState ('')
const [show, setShow] = useState ('')

const {createUser} = UserAuth()
const navigate = useNavigate()
const handleShow = () =>{
  setShow(!show)
}
const passwordValidator = () =>{
  const regEx = /^.{8,16}$/
  if(regEx.test(password)){
    setMessage("password is  valid")
  }else if(!regEx.test(password)){
    setMessage("Password should at least have 8 to 16 characters")
  }else{
    setMessage("")
  }
};
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
          <label onClick={handleShow }>Password</label>
          <input onChange={(e) =>setPassword(e.target.value)} type={show?"text":"password"} name="password"/>
        </div>
        <button onClick={passwordValidator}>Sign Up</button>
        {message}
       </form>
    </div>
  );
}

export default Signup;
