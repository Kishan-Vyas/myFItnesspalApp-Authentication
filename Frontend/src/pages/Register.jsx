import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import emailState from  "./../atoms/emailState"
import { useRecoilState } from "recoil";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/v1/auth/register", {
        name,
        email,
        password,
      });
      alert(
        "Registration successful! Please check your email for verification."
      );
      navigate("/verify-email");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Register
        </button>
        <Link to={"/login"}>
        <button
          className="w-full my-3 p-2 bg-blue-500 text-white rounded"
        >
          go to Login
        </button>
      </Link>
      </form>
    </div>
  );
};

export default Register;
