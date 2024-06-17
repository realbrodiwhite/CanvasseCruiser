// src/components/customerService/CustomerTickets.js

import React, { useState, useEffect } from "react";

const CustomerTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch("/api/customer-tickets");
        const data = await response.json();
        setTickets(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching customer tickets:", error);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div className="customer-tickets">
      <h2>Customer Tickets</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {/* Display customer tickets and other information here */}
          <ul>
            {tickets.map((ticket) => (
              <li key={ticket.id}>
                {ticket.subject} - {ticket.status}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomerTickets;