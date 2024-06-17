// src/components/crewLeader/CrewManagement.js

import React, { useState, useEffect } from "react";

const CrewManagement = () => {
  const [crewMembers, setCrewMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCrewMembers = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch("/api/crew-members");
        const data = await response.json();
        setCrewMembers(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching crew members:", error);
      }
    };

    fetchCrewMembers();
  }, []);

  return (
    <div className="crew-management">
      <h2>Crew Management</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {/* Display crew members and other information here */}
          <ul>
            {crewMembers.map((member) => (
              <li key={member.id}>
                {member.name} - {member.role}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CrewManagement;