import React from 'react';

import { HashRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import SideNav from './components/SideNav';
import ChiSquarePage from './pages/ChiSquarePage';
import HomePage from './pages/HomePage';
import NormalPage from './pages/NormalPage';
import StudentTPage from './pages/StudentTPage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <SideNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/normal" element={<NormalPage />} />
          <Route path="/studentt" element={<StudentTPage />} />
          <Route path="/chisquare" element={<ChiSquarePage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
