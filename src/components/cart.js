import React from "react";
import Image from "./Image";
import Counter from "./counter";
import axios from "axios";
import { useCartContext } from "../context/cartContext";

const Cart = () => {
  let products = JSON.parse(localStorage.getItem("items"));
  const totalPrice = products
    ? products.reduce((accumulator, item) => accumulator + item.price, 0)
    : 0;

  const { getProducts } = useCartContext();

  const RemoveItem = (productId) => {
    const filterProducts = products.filter(
      (item) => item.item_id !== productId
    );
    getProducts(filterProducts);
    //localStorage.setItem("items", JSON.stringify(filterProducts));
  };

  const Checkout = (e) => {
    e.preventDefault();
    const data = products.map((item) => ({
      "item_id": item.item_id,
      "sales_channel_id": 2,
      "event_type": "purchase",
    }));

    const ProceedTransaction = async (data)=>{
      
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://myproject.local:8000/users/transactions/create",
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
        data:data,
      };
      const response = await axios.request(config);
      console.log(response.data);
    
    }

    data.map((d)=>{
      ProceedTransaction(d);
    })  
  };

   

  

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-8">
            <div className="card bg-light mb-3">
              <div className="card-body">
                <h5 className="card-title">Your shopping cart</h5>
                <hr />
                {products &&
                  products.map((item) => (
                    <div className="row align-items-center" key={item.item_id}>
                      <div className="col-md-4 mb-3">
                        <Image
                          src={`https://frsstoragepavnhe.file.core.windows.net/frs/images/0${item.item_id
                            .toString()
                            .substr(0, 2)}/0${
                            item.item_id
                          }.jpg?sv=2021-12-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-06-30T19:27:18Z&st=2023-04-09T11:27:18Z&spr=https&sig=wPAoF6tCS%2BoowdD8ztwOMKiE%2BpRU6vAxCKM3ZuerB1Y%3D`}
                          alt="product"
                          width={"200px"}
                        />
                      </div>

                      <div className="col-md-8">
                        <div className="row">
                          <div className="col">
                            <p className="m-0">item_id: {item.item_id}</p>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col">
                            <p className="m-0">
                              Price:
                              {}
                            </p>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col">
                            <p className="m-0">Description:{item.descrption}</p>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col">
                            <button
                              className="btn btn-danger mt-3"
                              onClick={() => RemoveItem(item.item_id)}
                            >
                              <i className="bi bi-cart">Remove</i>
                            </button>
                          </div>
                        </div>
                      </div>

                      <hr />
                    </div>
                  ))}
                {!products && (
                  <div>
                    <h4 className="text-center text-dark font-weight-bold">
                      No Items to show ☹️
                    </h4>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-light mb-3">
              <div className="card-body ">
                <h5 className="card-title">
                  {` Subtotal ( ${
                    products ? products.length : 0
                  } items ) in your cart`}
                </h5>
                <h6 className="font-weight-bold">{`Total Price: ${
                  totalPrice === null ? 0 : totalPrice
                }`}</h6>

                <button
                  className="btn btn-warning mt-3 font-weight-bold"
                  onClick={(e) => Checkout(e)}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
