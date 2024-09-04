import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import CarouselComponent from './components/Carousel.jsx';
import StatsSection from './components/StatsSection.jsx';
import OfficialLogin from './components/OfficialLogin.jsx';
import MasterData from './components/MasterData.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx'; // Ensure this path is correct
import HeaderNavLayout from './layout/HeaderNavLayout.jsx';
import AadharOtpLogin from './components/AadharOtpLogin.jsx';
import axios from 'axios';
import NewOfficialRegister from './forms/NewOfficialRegister.jsx';

const App = () => {
  const [stats, setStats] = useState([]) ;
  const fetchStats = async()=>{
    const response = await axios.get("http://localhost:8080/api/stats") 
    return response.data
  }
  // useEffect(async() => {
   
  //   // const fetchedStats = await fetchStats()
  //   // setStats(fetchedStats);
  // }, []);

  return (
    <div>
      
      <Router>
        <Routes>
        <Route element={<HeaderNavLayout />}>
        <Route 
          path="/" 
          element={
            <>
              <CarouselComponent />
              <StatsSection stats={stats} />
            </>
          } 
        />
        <Route path="/official-login" element={<OfficialLogin />} />
        <Route path="/master/data" element={<ProtectedRoute > <MasterData /></ProtectedRoute>} />
        <Route path="/new/official/registration" element={<NewOfficialRegister />} />

        <Route path="/aadhar-otp-login" element={<AadharOtpLogin />} />
        </Route>
        </Routes>
       
     
    </Router>
    </div>
  );
};

export default App;
