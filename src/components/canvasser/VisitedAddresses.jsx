// src/components/canvasser/VisitedAddresses.js

import React, { useState, useEffect } from "react";

const VisitedAddresses = () => {
  const [addresses, setAddresses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch("/api/visited-addresses");
        const data = await response.json();
        setAddresses(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching visited addresses:", error);
      }
    };

    fetchAddresses();
  }, []);

  return (
    <div className="visited-addresses">
      <h2>Visited Addresses</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {/* Display visited addresses and other information here */}
          <ul>
            {addresses.map((address) => (
              <li key={address.id}>
                {address.address} - {address.date}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default VisitedAddresses;