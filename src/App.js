import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import LoginProvider from "./context/loginContext";
import Login from "../src/components/login";
import UserInfo from "../src/components/userInfo";
import Home from "../src/components/Home";
import NotFound from "../src/components/NotFound";
import Cart from "../src/components/cart";
import Transactions from "../src/components/transactions";
import Men from "../src/components/men";
import Women from "../src/components/women";
import Kids from "../src/components/kids";
import Sports from "../src/components/sports";
import Register from "../src/components/Register";
import CartProvider from "./context/cartContext";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <LoginProvider>
          <Navbar />

          <Routes>
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/userinfo" element={<UserInfo />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="*" element={<NotFound />} />

            <Route path="/home" element={<Home />} />
            <Route path="/category/men" element={<Men />} />
            <Route path="/category/women" element={<Women />} />
            <Route path="/category/kids" element={<Kids />} />
            <Route path="/category/sports" element={<Sports />} />
          </Routes>
          <Footer/>
        </LoginProvider>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
