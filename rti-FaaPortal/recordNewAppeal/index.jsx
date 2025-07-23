import React, { useState } from 'react';
import DashboardNavbar from '../faaDashboard/DashboardNavbar';
import DashboardFooter from '../faaDashboard/DashboardFooter';
import '../faaDashboard/Dashboard.css';
import './index.css';
import govlogo from '../faaDashboard/govlogo.jpg';

const userInfoData = {
  publicAuthority: 'Agriculture',
  role: 'Appellate Authority',
  user: 'Dr. XXXX XXXX',
};

const initialTableData = [
  {
    registrationNumber: 'GORAG/A/2024/',
    name: 'XXXXX XXXX',
    receivedDate: '01/12/2024',
    status: 'Pending',
    requestNumber: 'REQ/2024/1',
    pioDecisionDate: '01/11/2024',
    remarks: 'Awaiting documents',
    pdf: true,
  },
  {
    registrationNumber: 'GORAG/A/2024/2',
    name: 'YYYYY YYYY',
    receivedDate: '02/12/2024',
    status: 'Under Process',
    requestNumber: 'REQ/2024/2',
    pioDecisionDate: '02/11/2024',
    remarks: 'In review',
    pdf: false,
  },
  {
    registrationNumber: 'GORAG/A/2024/3',
    name: 'ZZZZZ ZZZZ',
    receivedDate: '03/12/2024',
    status: 'Comments Received',
    requestNumber: 'REQ/2024/3',
    pioDecisionDate: '03/11/2024',
    remarks: 'PIO commented',
    pdf: true,
  },
  // Additional mock data for pagination
  {
    registrationNumber: 'GORAG/A/2024/4',
    name: 'AAAAA AAAA',
    receivedDate: '04/12/2024',
    status: 'Pending',
    requestNumber: 'REQ/2024/4',
    pioDecisionDate: '04/11/2024',
    remarks: 'Pending review',
    pdf: false,
  },
  {
    registrationNumber: 'GORAG/A/2024/5',
    name: 'BBBBB BBBB',
    receivedDate: '05/12/2024',
    status: 'Under Process',
    requestNumber: 'REQ/2024/5',
    pioDecisionDate: '05/11/2024',
    remarks: 'Documents received',
    pdf: true,
  },
  {
    registrationNumber: 'GORAG/A/2024/6',
    name: 'CCCCC CCCC',
    receivedDate: '06/12/2024',
    status: 'Comments Received',
    requestNumber: 'REQ/2024/6',
    pioDecisionDate: '06/11/2024',
    remarks: 'Awaiting AA response',
    pdf: false,
  },
  {
    registrationNumber: 'GORAG/A/2024/7',
    name: 'DDDDD DDDD',
    receivedDate: '07/12/2024',
    status: 'Pending',
    requestNumber: 'REQ/2024/7',
    pioDecisionDate: '07/11/2024',
    remarks: 'Escalated',
    pdf: true,
  },
  {
    registrationNumber: 'GORAG/A/2024/8',
    name: 'EEEEE EEEE',
    receivedDate: '08/12/2024',
    status: 'Under Process',
    requestNumber: 'REQ/2024/8',
    pioDecisionDate: '08/11/2024',
    remarks: 'In process',
    pdf: false,
  },
  {
    registrationNumber: 'GORAG/A/2024/9',
    name: 'FFFFF FFFF',
    receivedDate: '09/12/2024',
    status: 'Comments Received',
    requestNumber: 'REQ/2024/9',
    pioDecisionDate: '09/11/2024',
    remarks: 'PIO replied',
    pdf: true,
  },
  {
    registrationNumber: 'GORAG/A/2024/10',
    name: 'GGGGG GGGG',
    receivedDate: '10/12/2024',
    status: 'Pending',
    requestNumber: 'REQ/2024/10',
    pioDecisionDate: '10/11/2024',
    remarks: 'Pending documents',
    pdf: false,
  },
];

const Inxed = () => {
  const [search, setSearch] = useState('');
  const [sortCol, setSortCol] = useState('');
  const [sortDir, setSortDir] = useState('asc');
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [selected, setSelected] = useState(null);
  const [tableData, setTableData] = useState(initialTableData);

  // Filtering
  const filtered = tableData.filter(row =>
    row.registrationNumber.toLowerCase().includes(search.toLowerCase()) ||
    row.name.toLowerCase().includes(search.toLowerCase())
  );

  // Sorting
  const sorted = [...filtered].sort((a, b) => {
    if (!sortCol) return 0;
    if (a[sortCol] < b[sortCol]) return sortDir === 'asc' ? -1 : 1;
    if (a[sortCol] > b[sortCol]) return sortDir === 'asc' ? 1 : -1;
    return 0;
  });

  // Pagination helper
  function paginate(array, pageNumber, pageSize) {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  }

  const totalPages = Math.ceil(sorted.length / rowsPerPage);
  const paged = paginate(sorted, page, rowsPerPage);

  const handleSort = col => {
    if (sortCol === col) setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    else {
      setSortCol(col);
      setSortDir('asc');
    }
  };

  return (
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
            <img src={govlogo} alt="Government Logo" className="dashboard-logo-img" />
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

        {/* Search and Filters */}
        <div className="index-table-controls">
          <div className="index-table-search-wrapper">
            <input
              type="text"
              placeholder="Search by Appeal No. or Name"
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ padding: 6, borderRadius: 4, border: '1px solid #bbb', minWidth: 220 }}
            />
          </div>
          <select value={rowsPerPage} onChange={e => { setRowsPerPage(Number(e.target.value)); setPage(1); }}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
        <div className="index-table-section">
          <table className="index-table" style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', border: '1px solid #d1d5db', minWidth: 700 }}>
            <thead>
              <tr style={{ background: '#e3eafc' }}>
                <th style={{ width: 40 }}></th>
                <th onClick={() => handleSort('registrationNumber')} style={{ cursor: 'pointer' }}>Registration Number (पंजीयन संख्या)</th>
                <th onClick={() => handleSort('name')} style={{ cursor: 'pointer' }}>Name (नाम)</th>
                <th onClick={() => handleSort('receivedDate')} style={{ cursor: 'pointer' }}>Received Date (प्राप्ति तिथि)</th>
                <th onClick={() => handleSort('status')} style={{ cursor: 'pointer' }}>Current Status</th>
                <th>Request Number</th>
                <th>Date of PIO's Decision</th>
                <th>Pending Reason/Remarks</th>
                <th style={{ width: 40 }}></th>
              </tr>
            </thead>
            <tbody>
              {paged.map((row, idx) => (
                <tr key={idx} style={{ background: idx % 2 === 0 ? '#f4f8fb' : '#fff' }}>
                  <td style={{ textAlign: 'center', border: '1px solid #d1d5db' }}>
                    <input
                      type="radio"
                      checked={selected === idx}
                      onChange={() => setSelected(selected === idx ? null : idx)}
                    />
                  </td>
                  <td style={{ padding: '10px 16px', border: '1px solid #d1d5db' }}>{row.registrationNumber}</td>
                  <td style={{ padding: '10px 16px', border: '1px solid #d1d5db' }}>{row.name}</td>
                  <td style={{ padding: '10px 16px', border: '1px solid #d1d5db' }}>{row.receivedDate}</td>
                  <td style={{ padding: '10px 16px', border: '1px solid #d1d5db' }}>{row.status}</td>
                  <td style={{ padding: '10px 16px', border: '1px solid #d1d5db' }}>{row.requestNumber}</td>
                  <td style={{ padding: '10px 16px', border: '1px solid #d1d5db' }}>{row.pioDecisionDate}</td>
                  <td style={{ padding: '10px 16px', border: '1px solid #d1d5db' }}>{row.remarks}</td>
                  <td style={{ textAlign: 'center', border: '1px solid #d1d5db' }}>{row.pdf ? <span style={{fontSize:'1.2em'}}>&#128196;</span> : null}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination Controls */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 8, marginTop: 12 }}>
            <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Prev</button>
            <span>Page {page} of {totalPages}</span>
            <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>Next</button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <DashboardFooter />
    </div>
  );
};

export default Inxed; 