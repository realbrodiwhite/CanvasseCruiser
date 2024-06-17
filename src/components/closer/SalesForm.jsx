// src/components/closer/SalesForm.js

import React, { useState } from "react";

const SalesForm = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    productName: "",
    amount: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/sales", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Handle successful submission
        setFormData({
          customerName: "",
          productName: "",
          amount: "",
          notes: "",
        });
        // Display a notification or redirect
      } else {
        // Handle errors
        console.error("Error submitting sale:", response.status);
      }
    } catch (error) {
      console.error("Error submitting sale:", error);
    }
  };

  return (
    <form className="sales-form" onSubmit={handleSubmit}>
      <h2>Sales Form</h2>
      <div>
        <label htmlFor="customerName">Customer Name:</label>
        <input
          type="text"
          id="customerName"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="notes">Notes:</label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit Sale</button>
    </form>
  );
};

export default SalesForm;