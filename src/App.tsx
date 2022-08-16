import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import "./assets/fontawesome-free-6.0.0-web/css/all.min.css";
import "./assets/themify-icons/themify-icons.css";
import Home from "./page/Home"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="" />
        <Route path="" />
      </Routes>
    </>
  );
}

export default App;
