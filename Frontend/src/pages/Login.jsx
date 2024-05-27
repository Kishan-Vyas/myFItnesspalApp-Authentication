import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/v1/auth/login', formData);
      alert('Login successful!');
      localStorage.setItem('token', response.data.token);
      navigate("/protected")
    } catch (error) {
      alert("can't able to login try again")
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />
        <Link to={'/reset-password'}>Forget password?</Link>
        <Link to={"/register"}>
        <button className="w-full my-3 p-2 bg-blue-500 text-white rounded">
           Go to Register
        </button>
      </Link>
        <Link to={"/verify-email"}>
        <button className="w-full my-3 p-2 bg-blue-500 text-white rounded">
           Account is not verified? 
        </button>
      </Link>

        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
