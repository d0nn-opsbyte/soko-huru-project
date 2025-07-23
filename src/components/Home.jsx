import React from "react";
import { useNavigate } from "react-router-dom";

const styles = {
  container: {
    textAlign: "center",
    padding: "60px 30px",
    fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: "900px",
    margin: "0 auto",
    background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
  },

  backgroundDecoration: {
    position: "absolute",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%",
    background: "radial-gradient(circle, rgba(0, 123, 255, 0.03) 0%, transparent 70%)",
    animation: "float 20s ease-in-out infinite",
    zIndex: -1,
  },

  title: {
    fontSize: "3.5rem",
    background: "linear-gradient(135deg, #007bff 0%, #0056b3 50%, #004085 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "30px",
    fontWeight: "900",
    letterSpacing: "-0.02em",
    position: "relative",
    display: "inline-block",
    textShadow: "0 4px 8px rgba(0, 123, 255, 0.2)",
    animation: "titleGlow 3s ease-in-out infinite alternate",
  },

  titleUnderline: {
    width: "120px",
    height: "4px",
    background: "linear-gradient(90deg, #007bff, #0056b3, #007bff)",
    margin: "0 auto 40px",
    borderRadius: "2px",
    boxShadow: "0 2px 10px rgba(0, 123, 255, 0.3)",
    animation: "shimmer 2s linear infinite",
  },

  buttonContainer: {
    margin: "40px 0",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },

  button: {
    margin: "0",
    padding: "18px 45px",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
    color: "white",
    boxShadow: "0 8px 25px rgba(0, 123, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    overflow: "hidden",
    transform: "translateY(0)",
  },

  buttonHover: {
    transform: "translateY(-3px)",
    boxShadow: "0 12px 35px rgba(0, 123, 255, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
    background: "linear-gradient(135deg, #0056b3 0%, #004085 100%)",
  },

  buttonActive: {
    transform: "translateY(-1px)",
    boxShadow: "0 6px 20px rgba(0, 123, 255, 0.35)",
  },

  buttonRipple: {
    position: "absolute",
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.6)",
    transform: "scale(0)",
    animation: "ripple 0.6s linear",
    pointerEvents: "none",
  },

  infoSection: {
    marginTop: "80px",
    padding: "40px",
    background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
    borderRadius: "16px",
    border: "1px solid rgba(0, 123, 255, 0.1)",
    borderLeft: "6px solid #007bff",
    textAlign: "left",
    boxShadow: "0 10px 40px rgba(0, 123, 255, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05)",
    maxWidth: "700px",
    marginLeft: "auto",
    marginRight: "auto",
    position: "relative",
    backdropFilter: "blur(10px)",
    animation: "slideUp 0.8s ease-out",
  },

  infoSectionGlow: {
    position: "absolute",
    top: "-2px",
    left: "-2px",
    right: "-2px",
    bottom: "-2px",
    background: "linear-gradient(135deg, #007bff, #0056b3, #007bff)",
    borderRadius: "18px",
    zIndex: -1,
    opacity: 0.1,
    animation: "borderGlow 3s ease-in-out infinite alternate",
  },

  infoSectionTitle: {
    color: "#007bff",
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "20px",
    position: "relative",
    display: "inline-block",
  },

  infoSectionTitleIcon: {
    display: "inline-block",
    marginRight: "12px",
    fontSize: "1.8rem",
    background: "linear-gradient(135deg, #007bff, #0056b3)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "bounce 2s infinite",
  },
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div style={styles.container}>
        <h1 style={styles.title}>Welcome to Soko Huru</h1>
        <div style={styles.titleUnderline}></div>
        <p>Choose your role to get started.</p>
        <div style={styles.buttonContainer}>
          <button style={styles.button} onClick={() => navigate("/buyer")}>
            Buyer
          </button>
          <button style={styles.button} onClick={() => navigate("/seller")}>
            Seller
          </button>
        </div>
      </div>
      <div style={styles.infoSection}>
        <div style={styles.infoSectionGlow}></div>
        <h3 style={styles.infoSectionTitle}>
          <span style={styles.infoSectionTitleIcon}>ℹ️</span>
          About this App
        </h3>
        <p>
          This is a simple marketplace where buyers can explore products displayed by sellers and can contact them to inquire more about the products of their interest.
          The platform is designed to be easy to use and efficient for both parties.
        </p>
      </div>
      <footer style={styles.footer}>
        <div style={styles.footerContent}></div>
        <div style={styles.footerColumn}></div>
        <h3 style={styles.footerColumn}>Contact</h3>
        <ul>
          <li>Email: info@sokohuru.com</li>
          <li>Phone: +254 700 123456</li>
          <li>Nairobi, Kenya</li>
        </ul>
        <div style={styles.footerColumn}>
          <h3 style={styles.footerHeading}>TIMELINE</h3>
          <ul>
            <li>Founded: 2025</li>
            <li>Products: 500+</li>
            <li>Happy Clients: 100+</li>
          </ul>
        </div>
        <div style={styles.copyright}>
          &copy; 2025 Soko Huru. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
