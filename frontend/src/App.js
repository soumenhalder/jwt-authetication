// App.js

import React from 'react';
import './App.css';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import OTPverification from './components/OTPverification';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/OTPverification" element={<OTPverification />} />
      </Routes>
    </Router>
  );
};

export default App;
