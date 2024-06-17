// src/components/closer/CommissionTracker.js

import React, { useState, useEffect } from "react";

const CommissionTracker = () => {
  const [commissions, setCommissions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCommissions = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch("/api/commissions");
        const data = await response.json();
        setCommissions(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching commissions:", error);
      }
    };

    fetchCommissions();
  }, []);

  return (
    <div className="commission-tracker">
      <h2>Commission Tracker</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {/* Display commissions and other information here */}
          <h3>Recent Commissions</h3>
          <ul>
            {commissions.map((commission) => (
              <li key={commission.id}>
                {commission.sale} - {commission.amount}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CommissionTracker;