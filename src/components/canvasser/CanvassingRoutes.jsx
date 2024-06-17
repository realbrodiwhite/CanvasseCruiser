// src/components/canvasser/CanvassingRoutes.js

import React, { useState, useEffect } from "react";

const CanvassingRoutes = () => {
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
    <div className="canvassing-routes">
      <h2>Canvassing Routes</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {/* Display routes and other information here */}
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

export default CanvassingRoutes;