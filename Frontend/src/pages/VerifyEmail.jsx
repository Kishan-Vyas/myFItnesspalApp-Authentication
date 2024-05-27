import React, { useEffect, useState } from "react";
import axios from "axios";
import emailState from "./../atoms/emailState";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const email = useRecoilValue(emailState);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/v1/auth/verifi-email", {
        otp,
        email,
      });
      alert(response.data.message);
      if (response.data.message === "user verified") navigate("/protected");
    } catch (error) {
      console.error("Verification error:", error);
    }
  };

  useEffect(() => {
    const sendOtpRequest = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/auth/verifi-email-otp",
          { email }
        );
        alert(response.data.message);
      } catch (error) {
        console.error("Verification error:", error);
      }
    };

    sendOtpRequest();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-4">Verify Email</h1>

        <input
          type="text"
          placeholder="OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
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

export default VerifyEmail;
