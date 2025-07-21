import React from 'react';
import SellerNavbar from '../components/SellerNavbar';

function SellerProductPage({ products, sellerName }) {
  return (
    <div className="seller-product-page">
       <header>
        <SellerNavbar />
      </header>
      <h1>Products for {sellerName}</h1>
      </div>)
      }

export default SellerProductPage;