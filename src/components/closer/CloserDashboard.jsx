// src/components/closer/CloserDashboard.js

import React, { useState, useEffect } from "react";

const CloserDashboard = () => {
  const [sales, setSales] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch("/api/sales");
        const data = await response.json();
        setSales(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    };

    fetchSales();
  }, []);

  return (
    <div className="closer-dashboard">
      <h2>Closer Dashboard</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {/* Display sales and other information here */}
          <h3>Recent Sales</h3>
          <ul>
            {sales.map((sale) => (
              <li key={sale.id}>
                {sale.customerName} - {sale.productName} - {sale.amount}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CloserDashboard;