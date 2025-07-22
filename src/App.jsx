import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BuyerPage from "./components/BuyerPage";
import SellerPage from "./components/SellerPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buyer" element={<BuyerPage />} />
        <Route path="/seller" element={<SellerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
