// src/components/admin/SystemSettings.js

import React, { useState } from "react";

const SystemSettings = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactEmail: "",
    websiteUrl: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/system-settings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Handle successful submission
        setFormData({
          companyName: "",
          contactEmail: "",
          websiteUrl: "",
        });
        // Display a notification or redirect
      } else {
        // Handle errors
        console.error("Error submitting system settings:", response.status);
      }
    } catch (error) {
      console.error("Error submitting system settings:", error);
    }
  };

  return (
    <form className="system-settings" onSubmit={handleSubmit}>
      <h2>System Settings</h2>
      <div>
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="contactEmail">Contact Email:</label>
        <input
          type="email"
          id="contactEmail"
          name="contactEmail"
          value={formData.contactEmail}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="websiteUrl">Website URL:</label>
        <input
          type="url"
          id="websiteUrl"
          name="websiteUrl"
          value={formData.websiteUrl}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Save Settings</button>
    </form>
  );
};

export default SystemSettings;