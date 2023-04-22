import { useState, useEffect } from "react";
import axios from "axios";
import "../css/ProductCard.css";
const Men = () => {
  const [responseData, setResponseData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  

  const RedirectToCart = (product) => {
    console.log("RedirectToCart called");
    setCartItems((prevCartItems) => {
      const itemExists = prevCartItems.find(
        (item) => item.item_id === product.item_id
      );
      if (itemExists) {
        return prevCartItems; // Return the previous cart items array
      } else {
        alert(`${product.item_id} is successfully added to the cart`);
        return [...prevCartItems,product]; // Return a new array with the new product added
      }
    });
    console.log(cartItems);
    localStorage.setItem("items", JSON.stringify(cartItems));
  };
  

  useEffect(() => {
    const response = async () => {
      const data = JSON.stringify({
        email: "100@gmail.com",
      });

      try {
        const response = await axios.post(
          "http://myproject.local:8000/category/mens",
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        setResponseData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    response();
  }, []);

  return (
    <>
      <h5 className="font-weight-bold text-center mt-3 mb-3">
        PRODUCTS FOR MEN
      </h5>
      <div className="boxcont mx-auto" style={{ width: "80%" }}>
        {responseData.map((transaction) => (
          <div key={transaction.item_id} className="">
            <div className="product-card">
              <div
                className="product-image "
                style={{
                  backgroundImage: `url(https://frsstoragepavnhe.file.core.windows.net/frs/images/0${transaction.item_id
                    .toString()
                    .substring(0, 2)}/0${
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
          </div>
        ))}
      </div>
    </>
  );
};

export default Men;
