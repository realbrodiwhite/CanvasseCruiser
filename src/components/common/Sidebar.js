// src/components/common/Sidebar.js

import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* Add your sidebar content here */}
      <h2>Navigation</h2>
      <ul>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/leads">Leads</a>
        </li>
        <li>
          <a href="/customers">Customers</a>
        </li>
        <li>
          <a href="/reports">Reports</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;