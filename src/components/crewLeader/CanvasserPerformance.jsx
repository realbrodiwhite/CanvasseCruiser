// src/components/crewLeader/CanvasserPerformance.js

import React, { useState, useEffect } from "react";

const CanvasserPerformance = () => {
  const [performanceData, setPerformanceData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPerformance = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch("/api/canvasser-performance");
        const data = await response.json();
        setPerformanceData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching canvasser performance:", error);
      }
    };

    fetchPerformance();
  }, []);

  return (
    <div className="canvasser-performance">
      <h2>Canvasser Performance</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {/* Display canvasser performance data here */}
          <h3>{performanceData.canvasserName}</h3>
          <p>Leads Generated: {performanceData.leadsGenerated}</p>
          <p>Visits Completed: {performanceData.visitsCompleted}</p>
          {/* Add other metrics as needed */}
        </div>
      )}
    </div>
  );
};

export default CanvasserPerformance;