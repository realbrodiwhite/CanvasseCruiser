// src/components/canvasser/CanvasserDashboard.js

import React, { useState, useEffect } from "react";

const CanvasserDashboard = () => {
  const [routes, setRoutes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch("/api/routes");
        const data = await response.json();
        setRoutes(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching routes:", error);
      }
    };

    fetchRoutes();
  }, []);

  return (
    <div className="canvasser-dashboard">
      <h2>Canvasser Dashboard</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {/* Display routes and other information here */}
          <h3>Assigned Routes</h3>
          <ul>
            {routes.map((route) => (
              <li key={route.id}>
                {route.name} - {route.address}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CanvasserDashboard;