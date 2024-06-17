// src/components/common/Header.js

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