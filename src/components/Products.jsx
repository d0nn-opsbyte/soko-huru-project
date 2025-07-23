import React, { useEffect, useState } from "react";
import SellerItem from "./SellerItem";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

function Products() {
  const [sellers, setSellers] = useState([]);
  const[buyer,setBuyer]=useState(null)

  useEffect(() => {
    fetch("http://localhost:3000/Sellers")
      .then((res) => res.json())
      .then((data) => {
        setSellers(data)
        });
  }, []);

  console.log(sellers)
  return (
  <>
    {!buyer ? (
      <Login setBuyer={setBuyer} />
    ) : ( 
     <>
      <h2>Welcome {buyer.Username}</h2>
      <img src={buyer.Photo} style={{height: "200px", width: "200px", borderRadius:"50%"}}/>
      {sellers.map((seller) => (
        <SellerItem key={seller.id} seller={seller} />
      ))}
      <button onClick={() => setBuyer(null)}>Logout</button>
      </>
    )}
  
  </>
);

}

export default Products;