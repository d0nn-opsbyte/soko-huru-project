import LogOutPage from "./pages/LogOutPage";
import SellerProductPage from "./pages/SellerProductPage";

const routes = [
    {
      path : "/logout",
      element: <LogOutPage />
    },
    {
      path : "/",
      element: <SellerProductPage />
    }
]
export default routes;