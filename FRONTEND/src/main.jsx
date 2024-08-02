import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Screens/Home.jsx';
import Login from './components/Login.jsx';
import SignUp from './Screens/SignUp.jsx';
import DoctorLogin from './components/DoctorLogin.jsx';
import DoctorSignUp from './components/DoctorSignUp.jsx';
import DoctorDashboard from './Screens/DoctorDasboard.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/doctorSignup' element={<DoctorSignUp />} />
        <Route exact path='/doctorlogin' element={<DoctorLogin />} />
        <Route exact path='/doctordashboard' element={<DoctorDashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
