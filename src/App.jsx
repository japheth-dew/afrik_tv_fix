import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home/homepage";
import SignIn from "./pages/auth/signin";
import SignUp from "./pages/auth/signup";
import Otp from "./pages/auth/otp";
import Forgotpassword from "./pages/auth/forgotpassword";

import Manageprofile from "./pages/Profile/manageprofile";
import ProfileEdit from "./pages/Profile/profileedit";
import Test from "./pages/Profile/test";
import Newprofile from "./pages/Profile/newprofile";

import Dashboard from "./pages/userdashboard/billing";
import Planform from "./pages/auth/planform"


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
                    path="/profile/manageprofile"
                    element={<Manageprofile />}
                  />
                </Routes>
                <>
                  <Routes>
                    <Route
                      path="/profile/profileedit"
                      element={<ProfileEdit />}
                    />
                  </Routes>
                  <>
                    <Routes>
                      <Route path="/profile/test" element={<Test />} />
                    </Routes>
                    <>
                      <Routes>
                        <Route path="/profile/new" element={<Newprofile />} />
                      </Routes>
                    </>
                  </>
                </>
              </>

      <>
      <Routes>
        <Route path="/auth/forgotpassword" element={<Forgotpassword />} />
      </Routes>

    </>

    <>
      <Routes>
        <Route path="/userdashboard/billing" element={<Dashboard />} />
      </Routes>


      <>
      <Routes>
        <Route path="auth/planform/" element={<Planform />} />
      </Routes>

    </>
    </>

    </>
      </>

            </>
          </>
        </>
      </>
    </>
  );
}

export default App;
