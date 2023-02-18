import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home/homepage";
import MoviePage from "./pages/Movies/index";
import Movies from "./pages/Movies/lists/Movies";
import Header from "./pages/Movies/Header";
import Series from "./pages/Movies/lists/Series";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>

      <>
      {/* Moviepage navbar */}
        <Routes>
           <Route path="/home/channel" element={<MoviePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
        </Routes>
      </>
    </>
  );
}

export default App;
