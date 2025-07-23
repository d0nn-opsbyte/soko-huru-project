import React, { useEffect, useState } from "react";
import SellerItem from "./SellerItem";

function Products() {
  const [sellers, setSellers] = useState([]);

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
      {sellers.map((seller) => (
        <SellerItem key={seller.id} seller={seller} />
      ))}
    </>
  )
}

export default Products;