import { createBrowserRouter } from "react-router-dom";
import Login from "../components/login";
import UserInfo from "../components/userInfo";
import Home from "../components/Home";
import NotFound from "../components/NotFound";
import Cart from "../components/cart";
import Transactions from "../components/transactions";
import Register from "../components/Register";
import Men from "../components/men";
import Women from "../components/women";
import Kids from "../components/kids";
import Login from "../components/login";
import Register from "../components/Register";


const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/userinfo",
    element: <UserInfo />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/transactions",
    element: <Transactions />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/category/men",
    element: <Men />,
  },
  {
    path: "/category/women",
    element: <Women />,
  },
  {
    path: "/category/kids",
    element: <Kids />,
  },
  {
    path: "/signin",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
]);

export default router;
