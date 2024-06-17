// src/components/admin/AdminDashboard.js

import React, { useState, useEffect } from "react";

const AdminDashboard = () => {
  const [systemMetrics, setSystemMetrics] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        // API Endpoint for System Metrics
        const response = await fetch("/api/system-metrics");
        const data = await response.json();
        setSystemMetrics(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching system metrics:", error);
      }
    };

    fetchMetrics();
  }, []);

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {/* Display system metrics and other information here */}
          <h3>Overall System Metrics</h3>
          <p>Total Users: {systemMetrics.totalUsers}</p>
          <p>Total Callbacks: {systemMetrics.totalCallbacks}</p>
          <p>Total Callbacks Today: {systemMetrics.totalCallbacksToday}</p>
          <p>Total Leads: {systemMetrics.totalLeads}</p>
          <p>Total Leads Today: {systemMetrics.totalLeadsToday}</p>
          <p>Total Sales: {systemMetrics.totalSales}</p>
          <p>Total Sales Today: {systemMetrics.totalSalesToday}</p>
          <p>Total Appointments Set: {systemMetrics.totalAppointmentsSet}</p>
          <p>Total Appointments Set Today: {systemMetrics.totalAppointmentsSetToday}</p>
          <p>Total Canvassers: {systemMetrics.totalCanvassers}</p>
          <p>Total Closers: {systemMetrics.totalClosers}</p>
          <p>Total Customers: {systemMetrics.totalCustomers}</p>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;