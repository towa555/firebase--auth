import React from 'react';
import { useNavigate } from "react-router-dom"
import { UserAuth } from '../context/Authcontext';
import {motion} from 'framer-motion'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Account() {
  const { user , logout } =UserAuth()
  const notify = () =>{
    toast('successfully logged out')
  }
 const navigate = useNavigate();
  const handleLogout = async () => {
    try{
    await logout();
    navigate('/')
    alert('logged out')
    }catch(e){
      alert(e.message)

    }
  }
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0,transition:{duration:1.5}}}>
    <h1>Account</h1>
    <p>user Email:{user && user.email}</p>
    <button onClick={notify}>Notify!</button>
    <button onClick={handleLogout}>Logout</button>
    <ToastContainer />
    </motion.div>
  );
}

export default Account;
