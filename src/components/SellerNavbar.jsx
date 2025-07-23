import { NavLink } from "react-router-dom";

function SellerNavbar({setSeller}) {
  
  function handleLogout(event){
    event.preventDefault();
    const confirmMessage= confirm("Do you want to log out?")
    if(!confirmMessage){return}
    setSeller('');
    localStorage.removeItem('seller')
  }

  return (
    <nav className="seller-navbar" style={{ display: "flex", gap: "20px" , hover: { backgroundColor: "rgba(4, 116, 245, 0.61)" }   }}>
        
          <NavLink style={{border:"1px solid black", backgroundColor:"rgba(245, 4, 4, 0.61)", color:"white", width:"80px", textAlign:"center", borderRadius: "5px", textDecoration:"none" }} to="/" activeclassname="active">
            Products
          </NavLink>

          <NavLink to="/logout" onClick={handleLogout} activeclassname="active">
            Logout
          </NavLink>
    </nav>
  );
}
export default SellerNavbar;