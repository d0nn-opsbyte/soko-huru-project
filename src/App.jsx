
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { useState } from 'react';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Products from './components/Products';
import LogOutPage from "./pages/LogOutPage";
import SellerProductPage from "./pages/SellerProductPage";


function App() {
    const [buyer, setBuyer] = useState(null);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buyerlogin" element={<Login setBuyer={setBuyer}/>} />
        <Route path="/signup" element={<SignUp  setBuyer={setBuyer}/>} />
        <Route path="/products" element={<Products buyer={buyer}/>} />
        <Route path="/sellerlogin" element={<SellerProductPage/>}/>
        <Route path="/logout" element={<LogOutPage />} />
      </Routes>  
    </Router>
  );
}

export default App;

