import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Screens/Home.jsx';
import Login from './components/Login.jsx';
import SignUp from './Screens/SignUp.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
