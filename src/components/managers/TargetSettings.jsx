// src/components/managers/TargetSettings.js

import React, { useState } from "react";

const TargetSettings = () => {
  const [formData, setFormData] = useState({
    targetLeads: "",
    targetSales: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/target-settings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Handle successful submission
        setFormData({
          targetLeads: "",
          targetSales: "",
        });
        // Display a notification or redirect
      } else {
        // Handle errors
        console.error("Error submitting target settings:", response.status);
      }
    } catch (error) {
      console.error("Error submitting target settings:", error);
    }
  };

  return (
    <form className="target-settings" onSubmit={handleSubmit}>
      <h2>Target Settings</h2>
      <div>
        <label htmlFor="targetLeads">Target Leads:</label>
        <input
          type="number"
          id="targetLeads"
          name="targetLeads"
          value={formData.targetLeads}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="targetSales">Target Sales:</label>
        <input
          type="number"
          id="targetSales"
          name="targetSales"
          value={formData.targetSales}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit Targets</button>
    </form>
  );
};

export default TargetSettings;