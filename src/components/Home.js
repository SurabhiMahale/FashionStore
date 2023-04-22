import React, { useState, useEffect} from "react";
import axios from "axios";

import "../css/ProductCard.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Home = () => {
  const [responseData1, setResponseData1] = useState([]);
  const [responseData2, setResponseData2] = useState([]);
  const [responseData3, setResponseData3] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  let isResSet = false;


  const RedirectToCart = (product) => {
    setCartItems((prevCartItems) => {
      const itemExists = prevCartItems.find(
        (item) => item.item_id === product.item_id
      );
      if (itemExists) {
        return prevCartItems; // Return the previous cart items array
      } else {
        alert(`${itemExists.item_id} is successfully added to the cart`);
        return [...prevCartItems,product]; // Return a new array with the new product added
      }
    });
    console.log(cartItems);
    localStorage.setItem("items", JSON.stringify(cartItems));
  };


  useEffect(() => {
    const response = async () => {
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://myproject.local:8000/recommend/foryou",
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
        withCredentials: true
      };

      let config3 = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://myproject.local:8000/recommend/freq",
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
          isResSet = true
          setResponseData3(response3.data);
        }
        
        console.log(response3.data);
      } catch (error) {
        console.log(error);
      }
    };

    response();
  }, []);

  const min = 150;
  const max = 5000;

  // const RedirectToCart = (product)=>{
   
  //   setSelectedProducts((prevSelectedProducts) => [...prevSelectedProducts, product]);
  //   console.log(selectedProducts);
    
  // }
  return (
    <>


      {/* Recommended for you */}

      <h5 className="font-weight-bold text-center mt-3 mb-3">
        RECOMMENDED FOR YOU
      </h5>

      <Swiper
        spaceBetween={0}
        slidesPerView={3}
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
                    Item Price: {transaction.price}
                  </div>
                  <div className="product-description">
                    Item Description: This is pro
                  </div>
                  <button
                    className="add-to-cart-button"
                    onClick={() => RedirectToCart(transaction)}
                  >
                    Add to Cart
                  </button>
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
        slidesPerView={3}
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
                    Item Price: {transaction.price}
                  </div>
                  <div className="product-description">
                    Item Description: This is pro
                  </div>
                  <button
                    className="add-to-cart-button"
                    onClick={() => RedirectToCart(transaction)}
                  >
                    Add to Cart
                  </button>
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
        slidesPerView={3}
        onSlideChange={() => {}}
        onSwiper={() => {}}
      >
        <div className="boxcont">
          { responseData3.map((transaction) => (
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
                    Item Price: {transaction.price}
                  </div>
                  <div className="product-description">
                    Item Description: This is product
                  </div>
                  <button
                    className="add-to-cart-button"
                    onClick={() => RedirectToCart(transaction)}
                  >
                    Add to Cart
                  </button>
                </div>
              </SwiperSlide>

            </div>
          ))}

         
        </div>

      </Swiper>

    </>
  );
};

export default Home;
