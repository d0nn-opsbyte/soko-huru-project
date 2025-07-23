import React, {useState, useEffect} from 'react';
import SellerNavbar from '../components/SellerNavbar';
import SellerItem from '../components/SellerItem';
import NewProductForm from '../components/NewProductForm';
import LoginForm from '../components/LoginForm';

function SellerProductPage() {
  const [sellerProducts, setSellerProducts] = useState([]);
   const[seller, setSeller] = useState('');
  const baseURL = 'http://localhost:3000/Sellers';
  const sellerId = seller.id
  
  useEffect(()=>{
    fetch(`${baseURL}/${sellerId}`)
    .then(response => response.json())
    .then(data => {
      setSellerProducts(data.Products || []);
      console.log('seller Data', data);
      console.log('Seller Products:', data.Products);
    })
    .catch(error => console.error('Error fetching seller products:', error));
  },[sellerId])


  return (
    <>
    {!seller?(
      <LoginForm setSeller={setSeller}/>):(
    <>
       <header>
        <SellerNavbar />
      </header><hr/>
      <div style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"20px"}}>
          <h2>Welcome to {seller.Sellername} Productpage</h2><hr />
          <ul style={{listStyleType:"none", display:"flex", flexDirection:"column", alignItems:"center", justifyItems:"space-around", gap:"20px"}}>
             <li style={{textDecoration:"underline"}}><strong>Contact details</strong></li>
             <li>Physical Adddress:<strong>{seller.Address}</strong></li>
             <li>Contact:<strong>{seller.Contact}</strong></li>
          </ul><hr />
          <h2>Products List</h2>
          <div style={{display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-around", gap:"100px"}}>
              {sellerProducts.length > 0 ? (
                sellerProducts.map(product => (
                   <SellerItem key={product.productId} product={product} sellerProducts={sellerProducts} sellerId={sellerId} setSellerProducts={setSellerProducts}/>
                 ))
                 ) : (
               <h1>No products available.</h1>
                 )}  
          </div>
      </div>
      <NewProductForm sellerId={sellerId} sellerProducts={sellerProducts} setSellerProducts={setSellerProducts}/>
   </>)
   };
   </>
  )
}
      

export default SellerProductPage;