import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import LogOutPage from "./pages/LogOutPage";
import SellerProductPage from "./pages/SellerProductPage";

function App(){
   return(
    <Router>
        <Routes>
           <Route path="/" element={<SellerProductPage/>}/>
           <Route path="/logout" element={<LogOutPage />} />
        </Routes>
    </Router>)
}

export default App