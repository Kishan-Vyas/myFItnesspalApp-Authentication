import React, { useEffect, useState } from "react";
import axios from "axios";
import emailState from "./../atoms/emailState";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/reset-password",
        { otp, email, password }
      );
      alert(response.data.message);
      navigate("/login");
    } catch (error) {
      console.error("Verification error:", error);
    }
  };

  const sendOtpRequestToResetPassword = async (e) => {
    e.preventDefault();
    try {
      if (email === "") {
        alert("Write email");
        return;
      }
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/reset-password-otp",
        { email }
      );
      alert(response.data.message);
    } catch (error) {
      console.error("Verification error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-4">Verify Email</h1>

        <input
          type="email"
          placeholder="Add Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          placeholder="OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="pssword"
          placeholder="new Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          onClick={sendOtpRequestToResetPassword}
          className="w-full my-4 p-2 bg-blue-500 text-white rounded"
        >
          Send OTP
        </button>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Verify
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
