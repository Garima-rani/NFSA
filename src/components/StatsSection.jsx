import React from 'react';
import './StatsSection.css';

const StatsSection = ({ stats }) => {
  if (!stats || stats.length === 0) {
    return <div>No stats available</div>;
  }

  return (
    <div className="stats-container">
      {stats.map((item, index) => (
        <div key={index} className="stat-item">
          <div className="stat-content">
            <p className="stats-title">{item.title}</p>
            <p className="stats-value">{item.value}</p>
            <p className="stats-date">As on {new Date().toLocaleDateString()}</p>
          </div>
          <img src={item.icon} alt={item.title} className="stats-icon" />
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
