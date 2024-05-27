import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">

        <h1 className="w-full flex justify-center items-center mb-8 text-[19px] font-semibold">Welcome to MyFitanessPal Secure App Auth</h1>
      <Link to={"/register"}>
        <button className="w-full my-3 p-2 bg-blue-500 text-white rounded">
          Register
        </button>
      </Link>
      <Link to={"/login"}>
        <button className="w-full my-3 p-2 bg-blue-500 text-white rounded">
          Login
        </button>
      </Link>
      </div>
    </div>
  );
};

export default Home;
