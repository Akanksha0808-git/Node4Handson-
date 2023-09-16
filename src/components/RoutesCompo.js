// Routes.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home"
import Register from './Register';
import Login from './Login';
import Dashboard from "./Dashboard"
import Navbar from "./Navbar"
function RoutesCompo() {
  return (
    <>

    <BrowserRouter>
    <Navbar/>
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default RoutesCompo;
