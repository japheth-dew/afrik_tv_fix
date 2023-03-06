import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home/homepage";
import SignIn from "./pages/auth/signin";
import SignUp from "./pages/auth/signup";
import Otp from "./pages/auth/otp";
import Forgotpassword from "./pages/auth/forgotpassword";
import Manageprofile from "./pages/Profile/manageprofile";

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

        <>
          <Routes>
            <Route path="/auth/signup" element={<SignUp />} />
          </Routes>

          <>
            <Routes>
              <Route path="/auth/otp" element={<Otp />} />
            </Routes>

            <>
              <Routes>
                <Route
                  path="/auth/forgotpassword"
                  element={<Forgotpassword />}
                />
              </Routes>
              <>
                <Routes>
                  <Route
                    path="/Profie/manageprofile"
                    element={<Manageprofile />}
                  />
                </Routes>
              </>
            </>
          </>
        </>
      </>
    </>
  );
}

export default App;
