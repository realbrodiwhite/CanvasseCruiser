// src/components/admin/RolePermissions.js

import React, { useState, useEffect } from "react";

const RolePermissions = () => {
  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch("/api/roles");
        const data = await response.json();
        setRoles(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };

    fetchRoles();
  }, []);

  return (
    <div className="role-permissions">
      <h2>Role Permissions</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {/* Display roles and permissions here */}
          <ul>
            {roles.map((role) => (
              <li key={role.id}>
                {role.name} - <button>Edit Permissions</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RolePermissions;