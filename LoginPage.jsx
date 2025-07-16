import React, { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { username, password, captcha });
  };

  return (
    <div style={styles.pageWrapper}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={{ flex: 1 }}>
            <h1 style={styles.portalTitle}>Right to Information Online Portal</h1>
            <p style={styles.subtitle}>
              An initiative of Administrative Reforms, Training, Pension and Public
              Grievances Department, Government of Tripura
            </p>
          </div>
          <button style={styles.loginDropdown}>LOGIN ⌄</button>
        </div>
      </header>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <div style={styles.loginCard}>
          <h2 style={styles.cardTitle}>Official Login</h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label style={styles.iconLabel}>👤</label>
              <input
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={styles.inputField}
                required
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.iconLabel}>🔒</label>
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.inputField}
                required
              />
            </div>

            <div style={styles.captchaRow}>
              <img
                src="https://dummyimage.com/180x50/cccccc/000000&text=le1GK9"
                alt="Captcha"
                style={styles.captchaImage}
              />
              <a href="#" style={styles.refreshLink}>↻ Refresh</a>
            </div>

            <input
              type="text"
              placeholder="Enter Captcha Code"
              value={captcha}
              onChange={(e) => setCaptcha(e.target.value)}
              style={{ ...styles.inputField, marginTop: "0.5rem", marginBottom: "1rem", textAlign: "center" }}
              required
            />

            <button type="submit" style={styles.loginButton}>LOGIN</button>
          </form>
          <p style={styles.forgotPassword}>
            <span style={styles.forgotText}>Forgot Password?</span> <a href="#" style={styles.resetLink}>Click Here to Reset</a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          Contents of the portal is provided by Administrative Reforms, Training, Pension and Public Grievances Department, Govt. of Tripura
        </p>
        <p style={styles.footerText}>
          Copyright © 2025. All Rights Reserved. This portal is Maintained by Tripura Information Commission and Designed & Developed by National Informatics Centre, Tripura
        </p>
      </footer>
    </div>
  );
};

const styles = {
  pageWrapper: {
    fontFamily: "Arial, sans-serif",
    background: "#f2f2f2",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100vw",
    overflowX: "hidden"
  },
  header: {
    backgroundColor: "#ffffff",
    borderBottom: "4px solid #1e40af",
    padding: "1rem 0",
    width: "100%"
  },
  headerContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    flexWrap: "wrap",
    width: "100%",
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
  loginDropdown: {
    backgroundColor: "#1e40af",
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "0.375rem",
    border: "none",
    fontSize: "1rem",
    cursor: "pointer"
  },
  mainContent: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem 1rem",
    background: "#f0f0f5",
    width: "100%",
    boxSizing: "border-box"
  },
  loginCard: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center"
  },
  cardTitle: {
    marginBottom: "1.5rem",
    fontSize: "1.3rem",
    color: "#1e40af"
  },
  inputGroup: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem"
  },
  iconLabel: {
    width: "2rem",
    textAlign: "center",
    fontSize: "1.2rem"
  },
  inputField: {
    flexGrow: 1,
    padding: "0.6rem",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    color: "#000"
  },
  captchaRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem"
  },
  captchaImage: {
    height: "50px",
    width: "180px",
    objectFit: "cover"
  },
  refreshLink: {
    color: "#1e40af",
    fontSize: "0.85rem",
    textDecoration: "none",
    cursor: "pointer"
  },
  loginButton: {
    width: "100%",
    padding: "0.75rem",
    backgroundColor: "#4b5563",
    color: "white",
    fontSize: "1rem",
    border: "none",
    borderRadius: "0.375rem",
    marginBottom: "0.5rem"
  },
  forgotPassword: {
    fontSize: "0.85rem",
    marginTop: "0.5rem",
    textAlign: "center"
  },
  forgotText: {
    color: "#000",
    marginRight: "0.25rem"
  },
  resetLink: {
    color: "#1e40af",
    textDecoration: "none"
  },
  footer: {
    backgroundColor: "#1e40af",
    color: "white",
    padding: "1rem",
    textAlign: "center",
    width: "100%",
    boxSizing: "border-box"
  },
  footerText: {
    fontSize: "0.85rem",
    margin: "0.25rem 0"
  }
};

export default LoginPage;
