import React from 'react';
import {Navigate} from "react-router-dom"
import { UserAuth } from '../context/Authcontext';



function protectedRoute ({children}) {
    const { user } = UserAuth();

    if(!user) {
        return <Navigate to='/' />
    }
  return children
}

export default protectedRoute;
