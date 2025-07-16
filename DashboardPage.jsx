import React from "react";

const DashboardPage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerTopBar}></div>
        <div style={styles.headerContent}>
          <div>
            <h1 style={styles.portalTitle}>Right to Information Online Portal</h1>
            <p style={styles.subtitle}>
              An initiative of Administrative Reforms, Training, Pension and Public
              Grievances Department, Government of Tripura
            </p>
          </div>
        </div>
      </header>

      {/* Nav Bar */}
      <nav style={styles.navBar}>
        <button style={styles.navItem}>HOME</button>
        <button style={styles.navItem}>SEARCH</button>
        <button style={styles.navItem}>ASSIGNMENT</button>
        <button style={styles.navItem}>UTILITY</button>
        <button style={styles.navItem}>REPORTS</button>
        <button style={styles.navItem}>LOGOUT</button>
      </nav>

      {/* Info Header */}
      <div style={styles.infoBanner}>
        <p style={styles.mainBanner}><strong>Welcome to PIO Module of RTI-MIS</strong></p>
        <div style={styles.subBannerRow}>
          <p style={styles.subBanner}><strong>PUBLIC AUTHORITY :</strong> Tripura Public Service Commission</p>
          <p style={styles.subBanner}><strong>ROLE :</strong> PIO</p>
          <p style={styles.subBanner}><strong>USER :</strong> SHRI XXXX XXXX</p>
        </div>
      </div>

      {/* Cards */}
      <main style={styles.mainContent}>
        <div style={styles.cardRow}>
          <div style={styles.cardBox}>
            <div style={styles.cardIcon}>📂</div>
            <div style={styles.cardText}>
              <div style={styles.cardTitle}>PENDING FOR DISPOSED OFF</div>
              <div><span style={styles.cardNumber}>4</span></div>
            </div>
          </div>

          <div style={styles.cardBox}>
            <div style={styles.cardIcon}>📂</div>
            <div style={styles.cardText}>
              <div style={styles.cardTitle}>RTI REQUESTS</div>
              <div>
                <span style={styles.cardLabel}>NEW </span><span style={styles.cardNumber}>3</span>&nbsp;&nbsp;
                <span style={styles.cardLabel}>UNDER PROCESS </span><span style={styles.cardNumber}>6</span>
              </div>
            </div>
          </div>

          <div style={styles.cardBox}>
            <div style={styles.cardIcon}>📂</div>
            <div style={styles.cardText}>
              <div style={styles.cardTitle}>APPEALS</div>
              <div>
                <span style={styles.cardLabel}>RAISED </span><span style={styles.cardNumber}>6</span>&nbsp;&nbsp;
                <span style={styles.cardLabel}>DISPOSED </span><span style={styles.cardNumber}>7</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>
          Contents of the portal is provided by Administrative Reforms, Training,
          Pension and Public Grievances Department, Govt. of Tripura
        </p>
        <p>
          Copyright © 2025. All Rights Reserved. This portal is Maintained by Tripura
          Information Commission and Designed & Developed by National Informatics
          Centre, Tripura
        </p>
      </footer>
    </div>
  );
};

const styles = {
  pageWrapper: {
    fontFamily: "Arial, sans-serif",
    background: "#f0f0f5",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    maxWidth: "100vw",
    overflowX: "hidden"
  },
  headerTopBar: {
    height: "8px",
    background: "#1e293b",
    width: "100%"
  },
  header: {
    backgroundColor: "#fff",
    borderBottom: "2px solid #ccc",
    width: "100%",
    boxSizing: "border-box"
  },
  headerContent: {
    textAlign: "center",
    padding: "1rem 1rem",
    maxWidth: "100%",
    boxSizing: "border-box"
  },
  portalTitle: {
    color: "#1e40af",
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: 0
  },
  subtitle: {
    fontSize: "0.85rem",
    color: "#333",
    marginTop: "0.25rem"
  },
  navBar: {
    backgroundColor: "#1e60af",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "0.5rem",
    width: "100%",
    boxSizing: "border-box"
  },
  navItem: {
    background: "transparent",
    color: "white",
    fontSize: "0.9rem",
    margin: "0.2rem 1rem",
    border: "none",
    cursor: "pointer"
  },
  infoBanner: {
    background: "#fff",
    color: "#8b0000",
    padding: "1rem 1rem",
    textAlign: "center",
    boxSizing: "border-box",
    width: "100%"
  },
  mainBanner: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "0.75rem"
  },
  subBannerRow: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "3rem"
  },
  subBanner: {
    fontSize: "0.9rem",
    fontWeight: "normal"
  },
  mainContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "2rem 1rem",
    flexGrow: 1,
    width: "100%",
    boxSizing: "border-box"
  },
  cardRow: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1.5rem",
    width: "100%",
    maxWidth: "1200px",
    padding: "0 1rem",
    boxSizing: "border-box"
  },
  cardBox: {
    border: "3px solid #1e40af",
    borderRadius: "8px",
    padding: "1rem",
    width: "260px",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },
  cardIcon: {
    fontSize: "2rem",
    color: "#f97316",
    marginBottom: "0.5rem"
  },
  cardText: {
    fontSize: "1rem",
    color: "#1e293b"
  },
  cardTitle: {
    fontWeight: "bold",
    color: "#8b0000",
    marginBottom: "0.25rem"
  },
  cardLabel: {
    color: "#8b0000",
    fontWeight: "bold"
  },
  cardNumber: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#dc2626"
  },
  footer: {
    backgroundColor: "#1e40af",
    color: "white",
    textAlign: "center",
    padding: "1rem",
    fontSize: "0.85rem",
    boxSizing: "border-box",
    width: "100%"
  }
};

export default DashboardPage;
