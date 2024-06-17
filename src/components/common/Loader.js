// src/components/common/Loader.js

import React from "react";

const Loader = () => {
  return (
    <div className="loader">
      {/* Add your loading indicator here */}
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;