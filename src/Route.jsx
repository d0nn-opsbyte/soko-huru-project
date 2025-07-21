import LogOutPage from "./pages/LogOutPage";
import SellerProductPage from "./pages/SellerProductPage";
import SellerConfig from "./pages/SellerConfig";
import SellerProfile from "./pages/SellerProfile";

const routes = [
    {
      path : "/logout",
      element: <LogOutPage />
    },
    { 
      path : "/seller-profile",
      element: <SellerProfile />
    },
    {
      path : "/seller-products/:id",
      element: <SellerProductPage />
    },
    { 
      path : "/seller-config",
      element: <SellerConfig />
     }
]
export default routes;