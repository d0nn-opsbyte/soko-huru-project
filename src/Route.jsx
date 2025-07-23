import LogOutPage from "./pages/LogOutPage";
import SellerProductPage from "./pages/SellerProductPage";
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
      path : "/",
      element: <SellerProductPage />
    }
]
export default routes;