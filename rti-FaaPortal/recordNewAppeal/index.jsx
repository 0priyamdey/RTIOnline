import React from 'react';
import DashboardNavbar from '../faaDashboard/DashboardNavbar';
import DashboardFooter from '../faaDashboard/DashboardFooter';
import '../faaDashboard/Dashboard.css';
import './index.css';

const userInfoData = {
  publicAuthority: 'Agriculture',
  role: 'Appellate Authority',
  user: 'Dr. XXXX XXXX',
};

const tableData = [
  {
    registrationNumber: 'GORAG/A/2024/',
    name: 'XXXXX XXXX',
    receivedDate: '01/12/2024',
    pdf: true,
  },
  {
    registrationNumber: 'GORAG/A/2024/2',
    name: 'YYYYY YYYY',
    receivedDate: '02/12/2024',
    pdf: false,
  },
  {
    registrationNumber: 'GORAG/A/2024/3',
    name: 'ZZZZZ ZZZZ',
    receivedDate: '03/12/2024',
    pdf: true,
  },
];

const Inxed = () => (
  <div className="dashboard-root" style={{ maxWidth: '1400px', margin: '0 auto', background: '#fff' }}>
    {/* Top Header */}
    <div className="dashboard-topbar">
      <span>Skip to main content</span>
      <select className="dashboard-lang-select" defaultValue="en">
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
      </select>
    </div>

    {/* Main Header */}
    <div className="dashboard-header">
      <div className="dashboard-header-inner">
        <div className="dashboard-header-left">
          {/* Logo intentionally omitted for this page */}
          <div className="dashboard-title-block">
            <div>
              <div className="dashboard-title">Right to Information Online Portal</div>
              <div className="dashboard-subtitle">An initiative of Administrative Reforms, Training, Pension and Public Grievances Department, Government of Tripura</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Navigation Bar */}
    <DashboardNavbar />

    {/* Main Content */}
    <main className="dashboard-main" style={{ width: '100%', minHeight: '400px' }}>
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

      {/* Table Section */}
      <div className="index-table-section">
        <div className="index-table-controls">
          <span style={{ background: '#1a237e', color: '#fff', padding: '2px 8px', borderRadius: 3, marginRight: 8, fontWeight: 600 }}>1</span>
          <span>All</span>
          <span style={{ marginLeft: 8 }}>Items per page:</span>
          <select defaultValue={10}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
        <div style={{ width: '100%', overflowX: 'auto', maxWidth: 900, margin: '0 auto' }}>
          <table className="index-table" style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', border: '1px solid #d1d5db', minWidth: 700 }}>
            <thead>
              <tr style={{ background: '#e3eafc' }}>
                <th style={{ width: 40 }}></th>
                <th style={{ padding: '10px 16px', border: '1px solid #d1d5db', textAlign: 'left', fontWeight: 600 }}>Registration Number (पंजीयन संख्या)</th>
                <th style={{ padding: '10px 16px', border: '1px solid #d1d5db', textAlign: 'left', fontWeight: 600 }}>Name (नाम)</th>
                <th style={{ padding: '10px 16px', border: '1px solid #d1d5db', textAlign: 'left', fontWeight: 600 }}>Received Date (प्राप्ति तिथि)</th>
                <th style={{ width: 40 }}></th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, idx) => (
                <tr key={idx} style={{ background: idx % 2 === 0 ? '#f4f8fb' : '#fff' }}>
                  <td style={{ textAlign: 'center', border: '1px solid #d1d5db' }}><input type="radio" /></td>
                  <td style={{ padding: '10px 16px', border: '1px solid #d1d5db' }}>{row.registrationNumber}</td>
                  <td style={{ padding: '10px 16px', border: '1px solid #d1d5db' }}>{row.name}</td>
                  <td style={{ padding: '10px 16px', border: '1px solid #d1d5db' }}>{row.receivedDate}</td>
                  <td style={{ textAlign: 'center', border: '1px solid #d1d5db' }}>{row.pdf ? <span style={{fontSize:'1.2em'}}>&#128196;</span> : null}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>

    {/* Footer */}
    <DashboardFooter />
  </div>
);

export default Inxed; 