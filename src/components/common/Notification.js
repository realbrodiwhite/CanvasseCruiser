// src/components/common/Notification.js

import React, { useState, useEffect } from "react";

const Notification = ({ message, type, duration = 3000 }) => {
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowNotification(false);
    }, duration);

    return () => clearTimeout(timeoutId);
  }, [duration]);

  return (
    showNotification && (
      <div className={`notification ${type}`}>
        <p>{message}</p>
      </div>
    )
  );
};

export default Notification;