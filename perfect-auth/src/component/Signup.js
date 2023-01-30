import React,{ useState} from 'react';
import {Link,useNavigate} from "react-router-dom";
import { UserAuth } from '../context/Authcontext';
import {motion} from 'framer-motion'



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
    <motion.div className='contact-container '
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{Y:0,transition:{duration:1.5}}}>
      <div className='contact-wrapper1'>
       <div>
        <h1 className='contact-header'>Sign up an Account </h1>
        <p className='contact-text'>
          Already have an account?<Link to="/" className='link'> Signin</Link>
        </p>
       </div>

       <form onSubmit={handleSubmit}>
        <div className='contact-input'>
          <label>Email Address</label>
          <input onChange={(e) =>setEmail(e.target.value)} type="email" name="email"/>

        </div>
        <div className='contact-input'>
          <label >Password</label>
          <div className='wrap' >
          <input onChange={(e) =>setPassword(e.target.value)} type={show?"text":"password"} name="password"/>
         <b onClick={handleShow }>0</b>
         </div>
        </div>
        <div className="middle">
        <button onClick={passwordValidator} className='btn1'>Sign Up</button>
        </div>
        <p className='message'>{message} </p>
         <div className='contact-social'>
          social media links
         </div>
       </form>
       </div>
       <div >
       <img className='contact-wrapper2' src='./image/location.png' alt='' />
       </div>
    </motion.div>
  );
}

export default Signup;
