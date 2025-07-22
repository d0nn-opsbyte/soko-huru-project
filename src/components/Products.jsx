import React, { useEffect, useState} from "react";

function Products(){
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/Sellers")
    .then((res) => res.json())
    .then((data) => setSellers(data));
  }, []);

  return(
    <>
        <h2>Available goods</h2>
        {sellers.map((seller) =>(
           <div key={seller.id}>
              <h3>{seller.sellername}</h3>
              <p>Contact: {seller.comtact}</p>
              <p>Address: {seller.address}</p>
              {seller.products.map((product) => (
                <div>
                    <img src={product.image} alt={product.name} />
                    <h4>product name</h4>
                    <p>price: ksh {product.price}</p>
                    <p>{product.description}</p>
                </div>
              ))}
           </div>
        ))}
    </>
  )


}

export default Products;