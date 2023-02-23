import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home/homepage";
import SignIn from "./pages/auth/signin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>

      <>
      <Routes>
        <Route path="/auth/signin" element={<SignIn />} />
      </Routes>
            </>
    </>
  );
}

export default App;
