import React, { useEffect, useState } from "react";
import SellerProducts from "./SellerProducts";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

function Products() {
  const [sellers, setSellers] = useState([]);
  const[buyer,setBuyer]=useState(null)

  useEffect(() => {
  const savedBuyer = localStorage.getItem("buyer");
  if (savedBuyer) {
    const parsed = JSON.parse(savedBuyer);
    setBuyer(parsed);
  } else {
    navigate("/login"); // redirect if not logged in
  }
}, []);

  useEffect(() => {
    fetch('https://soko-huru-json-server.onrender.com/Sellers')
      .then((res) => res.json())
      .then((data) => {
        setSellers(data)
        });
  }, []);

  console.log(sellers)

 const styles = {
    container: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#e6f0ff",
      minHeight: "100vh",
      color: "#003366",
    },
    header: {
      textAlign: "center",
      marginBottom: "30px",
    },
    profile: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "20px",
    },
    profileImage: {
      height: "200px",
      width: "200px",
      borderRadius: "50%",
      border: "4px solid #007bff",
      objectFit: "cover",
      marginTop: "10px",
    },
    logoutButton: {
      marginTop: "30px",
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "6px",
      fontSize: "16px",
      cursor: "pointer",
    },
  };

  return (
  <div style={styles.container}>
    {!buyer ? (
<<<<<<< HEAD
      <Login setBuyer={setBuyer} />
=======
      <Login />
>>>>>>> c3b89c726e335532f917acdc614c89ec1d792f60
    ) : ( 
     <>
      <h2 style={styles.header}>Welcome {buyer.Username} ("Buyer")</h2>
      <img src={buyer.Photo} style={{height: "200px", width: "200px", borderRadius:"50%"}}/>
      <h1>Available Products</h1>
      {sellers.map((seller) => (
        <SellerProducts key={seller.id} seller={seller} />
      ))}
      <div style={{ textAlign: "center"}}>
      <button onClick={() => setBuyer(null)} style={{height: "50px", width: "300px", backgroundColor: "#fff"}}>Logout</button>
      </div>
      </>
    )}
  
  </div>
);

}

export default Products;