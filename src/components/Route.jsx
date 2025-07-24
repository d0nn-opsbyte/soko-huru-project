import { Route } from "react-router-dom";
import Logout from "./Logout";
import Products from "./Products";

const routes = [
    {
        path : "./logout",
        element: <Logout />
    },
    {
        path : "/",
        element : <Products />
    }
]

export default Route