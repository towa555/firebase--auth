import React from 'react';
import { useNavigate } from "react-router-dom"
import { UserAuth } from '../context/Authcontext';

function Account() {
  const { user , logout } =UserAuth()
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
    <div>
    <h1>Account</h1>
    <p>user Email:{user && user.email}</p>
    <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Account;
