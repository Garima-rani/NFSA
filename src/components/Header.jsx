import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import './Header.css';
import Modal from '@mui/material/Modal';
import OfficialLogin from './OfficialLogin';
import AadharOtpLogin from './AadharOtpLogin'; // Import the AadharOtpLogin component

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate
  const [modalOpen , setModalOpen] = useState(false) ;
  const [showAadharOtp , setShowAadharOtp] = useState(false) ; // Initialize showAadharOtp state
  const handleOpen = ()=>{ setModalOpen(true) ;}
  const handleClose = ()=>{ setModalOpen(false) ;}

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOfficialLogin = () => {
    navigate('/official-login'); // Navigate to the official login page
  };

  const handlePublicLogin = () => {
    setShowAadharOtp(true); // Show the Aadhar OTP component
    setDropdownOpen(false); // Close the dropdown menu
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
            <button className="dropdown-item">
                Public Login
              </button>
              <button className="dropdown-item" onClick={handleOpen}>
                Official Login
              </button>
              
            </div>
          )}
        </div>
        <button className="header-button">English ⬇</button>
        <Modal
         open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <OfficialLogin  onClose={handleClose}/>
      </Modal>
      </div>
      {showAadharOtp && <AadharOtpLogin />} {/* Render the AadharOtpLogin component if showAadharOtp is true */}
    </div>
  );
}

export default Header;
