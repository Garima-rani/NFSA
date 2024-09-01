import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="header-container">
      <div className="header-logo">
        <img src="/nfsa-logo.png" alt="NFSA Logo" />
      </div>
      <div className="header-title">
        <h1>National Food Security Portal</h1>
        <p>Department of Food & Public Distribution,<br /> Government of India</p>
      </div>
      <div className="header-buttons">
        <div className="header-lang">
          <button className="lang-btn">-A</button>
          <button className="lang-btn">A</button>
          <button className="lang-btn">+A</button>
        </div>
        <div className="dropdown">
          <button className="header-button" onClick={toggleDropdown}>
            Sign In / Register ⬇
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <button className="dropdown-item">Public Login</button>
              <button className="dropdown-item">Official Login</button>
            </div>
          )}
        </div>
        <button className="header-button">English ⬇</button>
      </div>
    </div>
  );
}

export default Header;
