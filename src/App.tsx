import React from 'react';
import {Routes, Route} from "react-router-dom"
import Homepage from './pages/Homepage/Homepage'
import Navbar from './pages/Navbar/Navbar';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <div className="main-container">

      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/main' element={<MainPage/>} />
      </Routes>
    </div>
  );
}

export default App;
