import React, { useEffect, useState } from "react";
import axios from "axios";

const ProtectedContent = () => {
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3000/api/v1/main/protected", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMessage(response.data);

        const allUser = await axios.get("http://localhost:3000/api/v1/main/all-user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(allUser.data);
        console.log(allUser.data);
      } catch (error) {
        console.error("Error fetching protected data:", error);
      }
    };

    fetchProtectedData();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Protected Route</h1>
        <p>{message}</p>
        <div>
          All user
          <div >
            {users.map((user) => (
              <div className="bg-gray-200 rounded-lg my-2 p-3" key={user._id}>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Verified: {user.isVerified ? "Yes" : "No"}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtectedContent;
