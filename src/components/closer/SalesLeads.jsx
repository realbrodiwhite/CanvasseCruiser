// src/components/closer/SalesLeads.js

import React, { useState, useEffect } from "react";

const SalesLeads = () => {
  const [leads, setLeads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch("/api/leads");
        const data = await response.json();
        setLeads(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching leads:", error);
      }
    };

    fetchLeads();
  }, []);

  return (
    <div className="sales-leads">
      <h2>Sales Leads</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {/* Display sales leads and other information here */}
          <ul>
            {leads.map((lead) => (
              <li key={lead.id}>
                {lead.name} - {lead.phone} - {lead.email}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SalesLeads;