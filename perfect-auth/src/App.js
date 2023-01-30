import React from 'react';
import Signin from './component/Signin'
import './App.css';
import Signup from './component/Signup';
import Account from './component/Account';
import { Routes, Route , useLocation} from "react-router-dom";
import { AuthContextProvider } from './context/Authcontext';
import ProtectedRoute from './component/protectedRoute';
import{AnimatePresence} from 'framer-motion'

function App() {
  const location = useLocation()
  return (
    <div>
      <h1>Firebase Auth & Context</h1>
      <AnimatePresence>
      <AuthContextProvider>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>} />
        </Routes>
      </AuthContextProvider>
</AnimatePresence>
    </div>
  );
}

export default App;
