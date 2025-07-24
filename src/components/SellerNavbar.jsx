import { NavLink } from "react-router-dom";

function SellerNavbar({ setSeller }) {
  function handleLogout(event) {
    event.preventDefault();
    const confirmMessage = confirm("Do you want to log out?");
    if (!confirmMessage) return;
    setSeller('');
    localStorage.removeItem('seller');
  }

  const navStyle = {
    display: "flex",
    gap: "20px",
    padding: "10px 20px",
    backgroundColor: "#f0f8ff",
    boxShadow: "0 4px 8px rgba(0, 123, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Segoe UI', 'Roboto', sans-serif",
  };

  const linkStyle = {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px 15px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "14px",
    textAlign: "center",
    transition: "background-color 0.3s ease, transform 0.2s",
    border: "none",
  };

  const activeStyle = {
    backgroundColor: "#1c1c1c",
    color: "#ffffff",
    fontWeight: "bold",
    boxShadow: "inset 0 0 5px rgba(0,0,0,0.4)",
  };

  return (
    <nav style={navStyle}>

      <NavLink
        to="/"
        onClick={handleLogout}
        style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeStyle } : linkStyle
        }
      >
        Logout
      </NavLink>
    </nav>
  );
}

export default SellerNavbar;
