import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import VerifyEmail from "./pages/VerifyEmail";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedContent from "./pages/ProtectedContent"; // Rename the component to avoid confusion
import { RecoilRoot } from "recoil";
import ResetPassword from "./pages/ResetPassword";
import Home from "./pages/Home";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/protected"
            element={
              <ProtectedRoute>
                <ProtectedContent />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
