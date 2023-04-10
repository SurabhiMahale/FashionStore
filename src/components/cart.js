// import Image from "./Image";
// import img1 from "../assets/f1.jpeg";
// import img2 from "../assets/f2.jpeg";
// import img3 from "../assets/f3.jpeg";
import React from "react";
// import PriceCounter from "./PriceCounter";

const Cart = ({transaction}) => {
 console.log(transaction);
  return (
    <>
      <div class="container mt-3">
        <div class="row">
          <div class="col-md-8">
            <div class="card bg-light mb-3">
              <div class="card-body">
                <h5 class="card-title">Your shopping cart</h5>
                <p class="card-text">You have 7 total items.</p>
                <hr className="mx-auto"/>
                <div class="row">
                  <div class="col-sm-4">
                    <img src="" alt="Product Image" class="img-fluid"/>
                  </div>
                  <div class="col-sm-4">
                    <h5>Product</h5>
                  </div>
                  <div class="col-sm-4">
                    <h5>item_id</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card bg-light mb-3">
              <div class="card-body">
                <h5 class="card-title">Your cart</h5>
                <p class="card-text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
