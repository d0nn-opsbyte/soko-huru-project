import { NavLink } from "react-router-dom";

function SellerNavbar() {
  return (
    <nav className="seller-navbar" style={{ display: "flex", gap: "20px" }}>
          <NavLink to="/" style={{border:"1px solid black", backgroundColor:"rgba(245, 4, 4, 0.61)", color:"white", width:"80px", textAlign:"center", borderRadius: "5px" }} activeClassName="active">
            Config
          </NavLink>
        
          <NavLink to="/seller-product" activeClassName="active">
            Products
          </NavLink>
        
          <NavLink to="/seller-profile" activeClassName="active">
            Profile
          </NavLink>
        
          <NavLink to="/logout" activeClassName="active">
            Logout
          </NavLink>
    </nav>
  );
}
export default SellerNavbar;