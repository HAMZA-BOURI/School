import React from 'react';

import axios from 'axios'; 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import LivreDePaie from './Component/LivreDePaie/LivreDePaie';
import RegistreDesCongesPayes from './Component/RegistreDesCongespayes/RegistreDesCongespayes';
import Login from './Component/login/login';
import SignupPage from './Component/login/SignupPage';
import Liste from './Component/Liste/Liste';

import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/livre-de-paie" element={<LivreDePaie />} />
          <Route path="/registre-des-conges-payes" element={<RegistreDesCongesPayes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignupPage" element={<SignupPage />} />
          <Route path="/Liste" element={<Liste />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;