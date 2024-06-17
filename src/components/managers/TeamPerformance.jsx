// src/components/managers/TeamPerformance.js

import React, { useState, useEffect } from "react";

const TeamPerformance = () => {
  const [performanceData, setPerformanceData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPerformance = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch("/api/team-performance-details");
        const data = await response.json();
        setPerformanceData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching team performance details:", error);
      }
    };

    fetchPerformance();
  }, []);

  return (
    <div className="team-performance">
      <h2>Team Performance</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {/* Display team performance details here */}
          <ul>
            {performanceData.map((member) => (
              <li key={member.id}>
                {member.name} - Leads: {member.leadsGenerated} - Sales:{" "}
                {member.salesCompleted}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TeamPerformance;