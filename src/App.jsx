import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home/homepage";
import MovieList from "./pages/Movies/movieList"

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="movie" element={<MovieList />} />
        </Routes>
    </>
  );
}

export default App;
