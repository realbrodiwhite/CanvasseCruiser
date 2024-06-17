// src/components/customerService/CustomerDetails.js

import React, { useState, useEffect } from "react";

const CustomerDetails = () => {
  const [customer, setCustomer] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch("/api/customer");
        const data = await response.json();
        setCustomer(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching customer details:", error);
      }
    };

    fetchCustomer();
  }, []);

  return (
    <div className="customer-details">
      <h2>Customer Details</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {/* Display customer details here */}
          <h3>{customer.name}</h3>
          <p>Address: {customer.address}</p>
          <p>Phone: {customer.phone}</p>
          <p>Email: {customer.email}</p>
          {/* Add other details as needed */}
        </div>
      )}
    </div>
  );
};

export default CustomerDetails;