import React, { useState } from 'react';
import './Dashboard.css';
import DashboardNavbar from './DashboardNavbar';
import DashboardFooter from './DashboardFooter';
import govlogo from './govlogo.jpg';

// Simulated backend JSON data
const userInfoData = {
  publicAuthority: 'Agriculture',
  role: 'Appellate Authority',
  user: 'Dr. XXXX XXXX',
};

// Simulated backend JSON for dashboard cards (no icon property)
const dashboardCardsData = [
  {
    title: 'Appeal Pending <=10 Days',
    value: 10,
  },
  {
    title: 'New Appeal(s)',
    value: 12,
  },
  {
    title: 'Appeal Under Process',
    value: 5,
  },
];

const Dashboard = () => {
  const [language, setLanguage] = useState('en');
  // In the future, fetch userInfoData and dashboardCardsData from backend and set state

  return (
    <div className="dashboard-root">
      {/* Top Header */}
      <div className="dashboard-topbar">
        <span>Skip to main content</span>
        <select
          className="dashboard-lang-select"
          value={language}
          onChange={e => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="hi">हिन्दी</option>
        </select>
      </div>

      {/* Main Header */}
      <div className="dashboard-header">
        <div className="dashboard-header-inner">
          <div className="dashboard-header-left">
            <img src={govlogo} alt="Government Logo" className="dashboard-logo-img" />
            <div className="dashboard-title-block">
              <div>
                <div className="dashboard-title">Right to Information Online Portal</div>
                <div className="dashboard-subtitle">An initiative of Administrative Reforms, Training, Pension and Public Grievances Department, Government of Tripura</div>
              </div>
            </div>
          </div>
          <button className="dashboard-login-btn">LOGIN</button>
        </div>
      </div>

      {/* Navigation Bar */}
      <DashboardNavbar />

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Welcome Message */}
        <div className="dashboard-welcome">
          Welcome to Appellate Authority Module of RTI-MIS
        </div>

        {/* User Info (from JSON) */}
        <div className="dashboard-userinfo">
          <span>Public Authority: <b>{userInfoData.publicAuthority}</b></span>
          <span>Role: <b>{userInfoData.role}</b></span>
          <span>User: <b>{userInfoData.user}</b></span>
        </div>

        {/* Dashboard Cards (from JSON) */}
        <div className="dashboard-cards">
          {dashboardCardsData.map((card, idx) => (
            <div className="dashboard-card" key={idx}>
              <div className="dashboard-card-icon">📄</div>
              <div className="dashboard-card-content">
                <h3>{card.title}</h3>
                <p>{card.value}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <DashboardFooter />
    </div>
  );
};

export default Dashboard; 