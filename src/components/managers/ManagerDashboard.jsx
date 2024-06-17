// src/components/managers/ManagerDashboard.js

import React, { useState, useEffect } from "react";

const ManagerDashboard = () => {
  const [teamPerformance, setTeamPerformance] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTeamPerformance = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch("/api/team-performance");
        const data = await response.json();
        setTeamPerformance(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching team performance:", error);
      }
    };

    fetchTeamPerformance();
  }, []);

  return (
    <div className="manager-dashboard">
      <h2>Manager Dashboard</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {/* Display team performance and other information here */}
          <h3>Overall Team Performance</h3>
          <p>Leads Generated: {teamPerformance.leadsGenerated}</p>
          <p>Sales Completed: {teamPerformance.salesCompleted}</p>
          {/* Add other metrics as needed */}
        </div>
      )}
    </div>
  );
};

export default ManagerDashboard;