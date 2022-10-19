import React from 'react';
import {Routes, Route} from "react-router-dom"
import Homepage from './pages/Homepage/Homepage'
import Navbar from './pages/Navbar/Navbar';

function App() {
  return (
    <div className="main-container">

      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
