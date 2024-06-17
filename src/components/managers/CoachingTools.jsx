// src/components/managers/CoachingTools.js

import React, { useState, useEffect } from "react";

const CoachingTools = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch("/api/team-members");
        const data = await response.json();
        setTeamMembers(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <div className="coaching-tools">
      <h2>Coaching Tools</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {/* Display team members and other information here */}
          <ul>
            {teamMembers.map((member) => (
              <li key={member.id}>
                {member.name} - {member.role} -{" "}
                <button>View Performance</button>
                {/* Add other coaching tools as needed */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CoachingTools;// src/components/common/Header.js

import React from "react";

const Header = () => {
  return (
    <header className="header">
      {/* Add your header content here */}
      <h1>Canvassing and Sales App</h1>
      <nav>
        {/* Add navigation links here */}
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;