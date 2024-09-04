// src/components/AadhaarOtpLogin.js
import React, { useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

const AadhaarOtpLogin = () => {
  const [aadharNo, setAadharNo] = useState('');
  const [captchaValue, setCaptchaValue] = useState(null);
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  const recaptchaRef = React.createRef();

  const handleGenerateOtp = async () => {
    if (!aadharNo || !captchaValue) {
      setMessage('Please complete the CAPTCHA.');
      return;
    }

    try {
      const response = await axios.post('/api/otp/generate', {
        aadharNumber: aadharNo,
        captchaValue: captchaValue,
      });

      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error generating OTP.');
    }
  };

  const handleValidateOtp = async () => {
    try {
      const response = await axios.post('/api/otp/validate', {
        aadharNumber: aadharNo,
        otpCode: otp,
      });

      if (response.data) {
        setMessage('Login successful!');
        // Redirect to a different page or handle login success
      } else {
        setMessage('Invalid OTP.');
      }
    } catch (error) {
      setMessage('Error validating OTP.');
    }
  };

  const onCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    <div className="aadhaar-otp-login">
      <h2>Aadhaar OTP Login</h2>
      <input
        type="text"
        placeholder="Enter Aadhaar Number"
        value={aadharNo}
        onChange={(e) => setAadharNo(e.target.value)}
      />
      <ReCAPTCHA
        sitekey="YOUR_RECAPTCHA_SITE_KEY"
        onChange={onCaptchaChange}
        ref={recaptchaRef}
      />
      <button onClick={handleGenerateOtp}>Generate OTP</button>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={handleValidateOtp}>Validate OTP</button>
      <p>{message}</p>
    </div>
  );
};

export default AadhaarOtpLogin;
