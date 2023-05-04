import React, { useState, useEffect } from "react";
import axios from "axios";

import "../css/ProductCard.css";
import CustomCarousel from "./Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useLoginContext } from "../context/loginContext";
import Login from "./login";

const Home = () => {
  const { loginStatus } = useLoginContext();
  const [responseData1, setResponseData1] = useState([]);
  const [responseData2, setResponseData2] = useState([]);
  const [responseData3, setResponseData3] = useState([]);
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("items") || []
  );
  let isResSet = false;

  const RedirectToCart = (product) => {
    if (cartItems.length === 0) {
      setCartItems([product]);
    } else {
      if (Array.isArray(cartItems)) {
        cartItems.filter((p) => {
          const itemExists = p.item_id === product.item_id;
          if (!itemExists) {
            setCartItems([...cartItems, product]);
          }
        });
      }
    }
    alert(`${product.item_id} added successfully`);
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (Array.isArray(items)) {
      setCartItems(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const response = async () => {
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://myproject.local:8000/recommend/freq",
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };
      let config2 = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://myproject.local:8000/recommend/bestseller",
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };

      let config3 = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://myproject.local:8000/recommend/foryou",
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };

      try {
        const response1 = await axios.request(config);
        setResponseData1(response1.data);
        console.log(response1.data);
        const response2 = await axios.request(config2);
        setResponseData2(response2.data);
        console.log(response2.data);
        const response3 = await axios.request(config3);
        if (response3.data !== "None") {
          isResSet = true;
          setResponseData3(response3.data);
        }

        console.log(response3.data);
      } catch (error) {
        console.log(error);
      }
    };

    response();
  }, []);

  return loginStatus && loginStatus.status === "success" ?(
    <>
    <CustomCarousel/>
      {/* Recommended for you */}

      <h5 className="font-weight-bold text-center mt-3 mb-3">
        RECOMMENDED FOR YOU
      </h5>

      <Swiper
        spaceBetween={0}
        slidesPerView={4}
        onSlideChange={() => {}}
        onSwiper={() => {}}
      >
        <div className="boxcont">
          {responseData1.map((transaction) => (
            <div key={transaction.transaction_id} className="">
              <SwiperSlide>
                <div className="product-card mb-2 mx-lg-5 mx-md-5">
                  <div
                    className="product-image"
                    style={{
                      backgroundImage: `url(https://frsstoragepavnhe.file.core.windows.net/frs/images/0${transaction.item_id
                        .toString()
                        .substr(0, 2)}/0${
                        transaction.item_id
                      }.jpg?sv=2021-12-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-06-30T19:27:18Z&st=2023-04-09T11:27:18Z&spr=https&sig=wPAoF6tCS%2BoowdD8ztwOMKiE%2BpRU6vAxCKM3ZuerB1Y%3D`,
                    }}
                  ></div>
                  <div className="product-price">
                    Item Price: Rs.{transaction.price}
                  </div>
                  <div className="product-description">
                    Item Description:
                    {transaction.description.toString().substr(0, 80)}
                  </div>
                  {loginStatus && loginStatus.status === "success" && (
                    <>
                      <button
                        className="add-to-cart-button"
                        onClick={() => RedirectToCart(transaction)}
                      >
                        Add to Cart
                      </button>
                    </>
                  )}
                </div>
              </SwiperSlide>
            </div>
          ))}
        </div>
      </Swiper>

      {/* Best Seller */}
      <h5 className="font-weight-bold text-center mt-3 mb-3">BESTSELLER</h5>
      <Swiper
        spaceBetween={0}
        slidesPerView={4}
        onSlideChange={() => {}}
        onSwiper={() => {}}
      >
        <div className="boxcont">
          {responseData2.map((transaction) => (
            <div key={transaction.transaction_id} className="">
              <SwiperSlide>
                <div className="product-card mb-2 mx-lg-5 mx-md-5">
                  <div
                    className="product-image"
                    style={{
                      backgroundImage: `url(https://frsstoragepavnhe.file.core.windows.net/frs/images/0${transaction.item_id
                        .toString()
                        .substr(0, 2)}/0${
                        transaction.item_id
                      }.jpg?sv=2021-12-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-06-30T19:27:18Z&st=2023-04-09T11:27:18Z&spr=https&sig=wPAoF6tCS%2BoowdD8ztwOMKiE%2BpRU6vAxCKM3ZuerB1Y%3D`,
                    }}
                  ></div>
                  <div className="product-price">
                    Item Price: Rs.{transaction.price}
                  </div>
                  <div className="product-description">
                    Item Description: Rs.{transaction.description.toString().substr(0, 80)}
                  </div>
                  {loginStatus && loginStatus.status === "success" && (
                    <>
                      <button
                        className="add-to-cart-button"
                        onClick={() => RedirectToCart(transaction)}
                      >
                        Add to Cart
                      </button>
                    </>
                  )}
                </div>
              </SwiperSlide>
            </div>
          ))}
        </div>
      </Swiper>

      {/* Frequently bought Together */}
      <h5 className="font-weight-bold text-center mt-3 mb-3">
        FREQUENTLY BOUGHT TOGETHER
      </h5>

      <Swiper
        spaceBetween={0}
        slidesPerView={4}
        onSlideChange={() => {}}
        onSwiper={() => {}}
      >
        <div className="boxcont">
          {responseData3.map((transaction) => (
            <div key={transaction.item_id} className="">
              <SwiperSlide>
                <div className="product-card  mb-2 mx-lg-5 mx-md-5">
                  <div
                    className="product-image"
                    style={{
                      backgroundImage: `url(https://frsstoragepavnhe.file.core.windows.net/frs/images/0${transaction.item_id
                        .toString()
                        .substr(0, 2)}/0${
                        transaction.item_id
                      }.jpg?sv=2021-12-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-06-30T19:27:18Z&st=2023-04-09T11:27:18Z&spr=https&sig=wPAoF6tCS%2BoowdD8ztwOMKiE%2BpRU6vAxCKM3ZuerB1Y%3D`,
                    }}
                  ></div>
                  <div className="product-price">
                    Item Price: Rs.{transaction.price}
                  </div>
                  <div className="product-description">
                    Item Description: {transaction.description.toString().substr(0, 80)}
                  </div>
                  {loginStatus && loginStatus.status === "success" && (
                    <>
                      <button
                        className="add-to-cart-button"
                        onClick={() => RedirectToCart(transaction)}
                      >
                        Add to Cart
                      </button>
                    </>
                  )}
                </div>
              </SwiperSlide>
            </div>
          ))}
        </div>
      </Swiper>
    </>
  ):(
    <Login/>
  );
};

export default Home;
