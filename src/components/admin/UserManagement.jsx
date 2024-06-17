// src/components/admin/UserManagement.js

import React, { useState, useEffect } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch("/api/users");
        const data = await response.json();
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="user-management">
      <h2>User Management</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {/* Display users and other information here */}
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.name} - {user.role} - <button>Edit</button> -{" "}
                <button>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserManagement;