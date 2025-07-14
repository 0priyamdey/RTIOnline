import React from 'react';
import './Dashboard.css';

const DashboardNavbar = () => (
  <nav className="dashboard-navbar">
    <div className="dashboard-navbar-inner">
      <button className="dashboard-navbar-btn">HOME</button>
      <button className="dashboard-navbar-btn"> SEARCH</button>
      <button className="dashboard-navbar-btn"> ASSESSMENT</button>
      <button className="dashboard-navbar-btn"> REPORTS</button>
      <button className="dashboard-navbar-btn"> UTILITY</button>
      <button className="dashboard-navbar-btn"> LOGOUT</button>
    </div>
  </nav>
);

export default DashboardNavbar; 