// src/components/customerService/SatisfactionSurvey.js

import React, { useState } from "react";

const SatisfactionSurvey = () => {
  const [rating, setRating] = useState(null);

  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value, 10));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/satisfaction-survey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rating }),
      });
      if (response.ok) {
        // Handle successful submission
        setRating(null);
        // Display a notification or redirect
      } else {
        // Handle errors
        console.error("Error submitting survey:", response.status);
      }
    } catch (error) {
      console.error("Error submitting survey:", error);
    }
  };

  return (
    <form className="satisfaction-survey" onSubmit={handleSubmit}>
      <h2>Satisfaction Survey</h2>
      <p>Please rate your experience:</p>
      <div>
        <input
          type="radio"
          id="rating-1"
          name="rating"
          value="1"
          checked={rating === 1}
          onChange={handleRatingChange}
        />
        <label htmlFor="rating-1">1</label>
      </div>
      <div>
        <input
          type="radio"
          id="rating-2"
          name="rating"
          value="2"
          checked={rating === 2}
          onChange={handleRatingChange}
        />
        <label htmlFor="rating-2">2</label>
      </div>
      <div>
        <input
          type="radio"
          id="rating-3"
          name="rating"
          value="3"
          checked={rating === 3}
          onChange={handleRatingChange}
        />
        <label htmlFor="rating-3">3</label>
      </div>
      <div>
        <input
          type="radio"
          id="rating-4"
          name="rating"
          value="4"
          checked={rating === 4}
          onChange={handleRatingChange}
        />
        <label htmlFor="rating-4">4</label>
      </div>
      <div>
        <input
          type="radio"
          id="rating-5"
          name="rating"
          value="5"
          checked={rating === 5}
          onChange={handleRatingChange}
        />
        <label htmlFor="rating-5">5</label>
      </div>
      <button type="submit" disabled={rating === null}>
        Submit
      </button>
    </form>
  );
};

export default SatisfactionSurvey;