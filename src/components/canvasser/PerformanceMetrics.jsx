// src/components/canvasser/PerformanceMetrics.js

import React, { useState, useEffect } from "react";

const PerformanceMetrics = () => {
  const [metrics, setMetrics] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch("/api/canvasser-metrics");
        const data = await response.json();
        setMetrics(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching performance metrics:", error);
      }
    };

    fetchMetrics();
  }, []);

  return (
    <div className="performance-metrics">
      <h2>Performance Metrics</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {/* Display performance metrics here */}
          <h3>Leads Generated: {metrics.leadsGenerated}</h3>
          <h3>Visits Completed: {metrics.visitsCompleted}</h3>
          {/* Add other metrics as needed */}
        </div>
      )}
    </div>
  );
};

export default PerformanceMetrics;