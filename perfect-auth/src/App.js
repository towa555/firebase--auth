import React from 'react';
import Signin from './component/Signin'
import './App.css';
import Signup from './component/Signup';
import Account from './component/Account';
import { Routes, Route , useLocation} from "react-router-dom";
import { AuthContextProvider } from './context/Authcontext';
import ProtectedRoute from './component/protectedRoute';


function App() {
  const location = useLocation()
  return (
    <div>
      <h1>Firebase Auth & Context</h1>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>} />
        </Routes>
      </AuthContextProvider>

    </div>
  );
}

export default App;
