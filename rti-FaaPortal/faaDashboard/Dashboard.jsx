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
    title: 'Appeal Pending <= 10 Days',
    value: 10,
    filter: 'pending10',
  },
  {
    title: 'New Appeal(s)',
    value: 12,
    filter: 'new',
  },
  {
    title: 'Appeal Under Process',
    value: 5,
    filter: 'underprocess',
  },
  {
    title: 'Comments Received From PIO',
    value: 2,
    filter: 'comments',
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
            <div
              className="dashboard-card"
              key={idx}
              style={{ cursor: 'pointer' }}
              onClick={() => window.location.href = `/appeals?filter=${card.filter}`}
            >
              <div className="dashboard-card-icon">
                {/* Use a static envelope/message icon for all cards */}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="18" fill="#FF9800"/>
                  <path d="M10 13C10 11.8954 10.8954 11 12 11H24C25.1046 11 26 11.8954 26 13V23C26 24.1046 25.1046 25 24 25H12C10.8954 25 10 24.1046 10 23V13Z" fill="white"/>
                  <path d="M10.5 13.5L18 19L25.5 13.5" stroke="#FF9800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
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