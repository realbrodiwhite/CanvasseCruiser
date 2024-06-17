// src/components/crewLeader/SupportTickets.js

import React, { useState, useEffect } from "react";

const SupportTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch("/api/support-tickets");
        const data = await response.json();
        setTickets(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching support tickets:", error);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div className="support-tickets">
      <h2>Support Tickets</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {/* Display support tickets and other information here */}
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

export default SupportTickets;