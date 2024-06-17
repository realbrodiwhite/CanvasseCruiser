// src/components/admin/AuditLogs.js

import React, { useState, useEffect } from "react";

const AuditLogs = () => {
  const [logs, setLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch("/api/audit-logs");
        const data = await response.json();
        setLogs(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching audit logs:", error);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div className="audit-logs">
      <h2>Audit Logs</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {/* Display audit logs here */}
          <ul>
            {logs.map((log) => (
              <li key={log.id}>
                {log.timestamp} - {log.user} - {log.action}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AuditLogs;