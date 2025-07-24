import React, { useState, useEffect } from 'react';
import SellerNavbar from '../components/SellerNavbar';
import SellerItem from '../components/SellerItem';
import NewProductForm from '../components/NewProductForm';
import LoginForm from '../components/LoginForm';
import SellerProfile from '../components/SellerProfile';

function SellerProductPage() {
  const [sellerProducts, setSellerProducts] = useState([]);
  const [seller, setSeller] = useState(null);
  const baseURL = 'https://soko-huru-json-server.onrender.com/Sellers';

  // Load seller from localStorage
  useEffect(() => {
    const savedSeller = localStorage.getItem('seller');
    if (savedSeller) {
      const parsedSeller = JSON.parse(savedSeller);
      setSeller(parsedSeller);
      setSellerProducts(parsedSeller.Products || []);
    } else {
      console.log("No seller found in local storage");
    }
  }, []);

  // Fetch products from API if seller exists
  useEffect(() => {
    if (!seller?.id) return;

    fetch(`${baseURL}/${seller.id}`)
      .then(response => response.json())
      .then(data => {
        setSellerProducts(data.Products || []);
        console.log('Fetched seller data:', data);
      })
      .catch(error => console.error('Error fetching seller products:', error));
  }, [seller?.id]);

  // STYLES
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
    backgroundColor: "#f2f2f2",
    minHeight: "100vh",
    color: "#333"
  };

  const headingStyle = {
    color: "#007bff",
    marginBottom: "15px",
    fontWeight: 600,
    fontSize: "28px",
    letterSpacing: "0.5px",
    textShadow: "0 1px 2px rgba(0,0,0,0.1)"
  };

  const contactListStyle = {
    listStyleType: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "8px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#fff",
    width: "100%",
    maxWidth: "500px",
    color: "#444",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "1.5",
    boxShadow: "0 0 10px rgba(0,0,0,0.05)"
  };

  const subheadingStyle = {
    color: "#007bff",
    fontSize: "18px",
    fontWeight: 600,
    borderBottom: "1px solid #ccc",
    paddingBottom: "5px"
  };

  const productsWrapperStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "40px",
    backgroundColor: "#e6e6e6",
    padding: "30px",
    borderRadius: "10px",
    width: "100%",
    marginTop: "20px",
    boxShadow: "inset 0 0 5px rgba(0,0,0,0.1)",
    fontFamily: "'Segoe UI', 'Roboto', sans-serif"
  };

  const noProductsStyle = {
    color: "#666",
    fontStyle: "italic",
    fontWeight: 300,
    letterSpacing: "0.3px"
  };

  // Render
  return (
    <>
      {!seller?.id ? (
        <LoginForm setSeller={setSeller} />
      ) : (
        <>
          <header>
            <SellerNavbar setSeller={setSeller} />
          </header>
          <hr />
          <div style={containerStyle}>
            <h2 style={headingStyle}>Welcome to {seller.Sellername} Product Page</h2>
            <ul style={contactListStyle}>
              <li style={subheadingStyle}><strong>Contact Details</strong></li>
              <li><strong>Physical Address:</strong> {seller.Address}</li>
              <li><strong>Contact:</strong> {seller.Contact}</li>
            </ul>
            <hr style={{ width: "100%", maxWidth: "600px", borderColor: "#ccc", margin: "30px 0" }} />
            <h2 style={headingStyle}>Products List</h2>
            <div style={productsWrapperStyle}>
              {sellerProducts.length > 0 ? (
                sellerProducts.map(product => (
                  <SellerItem
                    key={product.productId}
                    product={product}
                    sellerProducts={sellerProducts}
                    sellerId={seller.id}
                    setSellerProducts={setSellerProducts}
                  />
                ))
              ) : (
                <h3 style={noProductsStyle}>No products available, add new products.</h3>
              )}
            </div>
          </div>
          <NewProductForm
            sellerId={seller.id}
            sellerProducts={sellerProducts}
            setSellerProducts={setSellerProducts}
          />
          <SellerProfile Id={seller.id} />
        </>
      )}
    </>
  );
}

export default SellerProductPage;
