import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/fontawesome-free-6.0.0-web/css/all.min.css";
import "./assets/themify-icons/themify-icons.css";
import Home from "./page/Home";
import Movie from "./page/Movie";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:itemID" element={<Movie />} />
      </Routes>
    </>
  );
}

export default App;
