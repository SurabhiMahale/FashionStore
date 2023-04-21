import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import LoginProvider from "./context/loginContext";
import Login from "../src/components/login";
import UserInfo from "../src/components/userInfo";
import Home from "../src/components/Home";
import NotFound from "../src/components/NotFound";
import Cart from "../src/components/cart";
import Transactions from "../src/components/transactions";
import Register from "../src/components/Register";
import CartProvider from "./context/cartContext";
function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <LoginProvider>
          <Navbar />

          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/userinfo" element={<UserInfo />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LoginProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
