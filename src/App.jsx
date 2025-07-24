
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BuyerPage from "./components/BuyerPage";
import SellerPage from "./components/SellerPage";
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
        <Route path="/buyer" element={<BuyerPage />} />
        <Route path="/seller" element={<SellerPage />} />
        <Route path="/" element={<Login setBuyer={setBuyer}/>} />
        <Route path="/signup" element={<SignUp  setBuyer={setBuyer}/>} />
        <Route path="/products" element={<Products buyer={buyer}/>} />
        <Route path="/" element={<SellerProductPage/>}/>
        <Route path="/logout" element={<LogOutPage />} />
      </Routes>  
    </Router>
  );
}

export default App;

