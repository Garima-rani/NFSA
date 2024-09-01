// import React from 'react';
// import Header from './components/Header.jsx';
// import Navbar from './components/Navbar.jsx';
// import CarouselComponent from './components/Carousel.jsx';
// import StatsSection from './components/StatsSection.jsx';


// // import MainContent from './components/MainContent.jsx';
// // import Footer from './components/Footer.jsx';
// // import './App.css'; // Optional, if you have global styles

// function App() {
  
//   // const Stats = [
//   //   {
//   //     title: "Title 1",
//   //     value: "Value 1",
//   //     icon: "/icons/fair-price-shop.png",
//   //   },
//   //   {
//   //     title: "Title 2",
//   //     value: "Value 2",
//   //     icon: "/icons/pos-enabled.png",
//   //   },
//   //   {
//   //     title: "Title 3",
//   //     value: "Value 3",
//   //     icon: "/icons/ration-cards.png",
//   //   },
//   //   {
//   //     title: "Title 4",
//   //     value: "Value 4",
//   //     icon: "/icons/beneficiaries.png",
//   //   },
//   //   {
//   //     title: "Title 4",
//   //     value: "Value 4",
//   //     icon: "/icons/central-allocation.png",
//   //   },
//   //   {
//   //     title: "Title 4",
//   //     value: "Value 4",
//   //     icon: "/icons/state-allocation.png",
//   //   },
//   //   {
//   //     title: "Title 4",
//   //     value: "Value 4",
//   //     icon: "/icons/total-distribution.png",
//   //   },
  
//   // ];

//     const [stats, setStats] = useState([]);
  
//     useEffect(() => {
//       // Replace with your API endpoint
//       fetch('/api/stats')
//         .then((response) => response.json())
//         .then((data) => setStats(data))
//         .catch((error) => console.error('Error fetching stats:', error));
//     }, []);
//   return (
//     <div className="App">
//       <Header />
//       <Navbar />
//       <CarouselComponent />
//       <StatsSection />
//       {/* <MainContent /> */}
//       {/* <Footer /> */}
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import CarouselComponent from './components/Carousel.jsx';
import StatsSection from './components/StatsSection'; // Adjust the path if necessary

const App = () => {
  const [stats, setStats] = useState([]);

  // Simulating data fetch or backend data
  useEffect(() => {
    // Example data, you would replace this with data from your backend
    const fetchedStats = [
      {
        title: "Fair Price Shop",
        value: "5,38,098",
        icon: "/icons/fair-price-shop.png",
      },
      {
        title: "POS Enabled Shop",
        value: "4,00,000",
        icon: "/icons/pos-enabled.png",
      },
      {
        title: "Ration Cards",
        value: "10,00,000",
        icon: "/icons/ration-cards.png",
      },
      {
        title: "Beneficiaries",
        value: "2,50,000",
        icon: "/icons/beneficiaries.png",
      },
      {
        title: "Beneficiaries",
        value: "2,50,000",
        icon: "/icons/state-allocation.png",
      },
      {
        title: "Beneficiaries",
        value: "2,50,000",
        icon: "/icons/central-allocation.png",
      },
      {
        title: "Beneficiaries",
        value: "2,50,000",
        icon: "/icons/total-distribution.png",
      },
      // Add more stats as needed
    ];

    // Set the fetched data to the state
    setStats(fetchedStats);
  }, []);

  return (
    
    <div>
      <Header />
      <Navbar />
      <CarouselComponent />
      {/* Render StatsSection and pass stats as a prop */}
      <StatsSection stats={stats} />
    </div>
  );
};

export default App;
