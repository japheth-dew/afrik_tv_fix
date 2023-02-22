import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home/homepage";
import SignIn from "./pages/SignIn/signin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>

      <>
      <Routes>
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>

      </>
    </>
  );
}

export default App;
