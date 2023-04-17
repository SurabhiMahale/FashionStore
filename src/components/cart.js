import React from "react";
import Image from "./Image";
import Counter from "./counter";

const Cart = () => {
  let cartItems = JSON.parse(localStorage.getItem("items"));

  const totalPrice = cartItems
    ? cartItems.reduce((accumulator, item) => accumulator + item.price, 0)
    : 0;
  return (
    <>
      <div class="container mt-3">
        <div class="row">
          <div class="col-md-8">
            <div class="card bg-light mb-3">
              <div class="card-body">
                <h5 class="card-title">Your shopping cart</h5>
                <hr />
                {cartItems &&
                  cartItems.map((item) => (
                    <div class="row align-items-center" key={item.itemId}>
                      <div class="col-md-4 mb-3">
                        <Image
                          src={`https://frsstoragepavnhe.file.core.windows.net/frs/images/0${item.itemId
                            .toString()
                            .substr(0, 2)}/0${
                            item.itemId
                          }.jpg?sv=2021-12-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-06-30T19:27:18Z&st=2023-04-09T11:27:18Z&spr=https&sig=wPAoF6tCS%2BoowdD8ztwOMKiE%2BpRU6vAxCKM3ZuerB1Y%3D`}
                          alt="product"
                          width={"200px"}
                        />
                      </div>

                      <div class="col-md-8">
                        <div class="row">
                          <div class="col">
                            <p class="m-0">ItemId: {item.itemId}</p>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col">
                            <p class="m-0">Price: {item.price}</p>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col">
                            <p class="m-0">Description:{item.descrption}</p>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col">
                            <button class="btn btn-danger mt-3">
                              <i class="bi bi-cart">Remove</i>
                            </button>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col">
                            <Counter />
                          </div>
                        </div>
                      </div>

                      <hr />
                    </div>
                  ))}
                {!cartItems && (
                  <div>
                    <h4 className="text-center text-dark font-weight-bold">
                      No Items to show ☹️
                    </h4>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card bg-light mb-3">
              <div class="card-body ">
                <h5 class="card-title">
                  {` Subtotal ( ${
                    cartItems ? cartItems.length : 0
                  } items ) in your cart`}
                </h5>
                <h6 class="font-weight-bold">{`Total Price: ${
                  totalPrice === null ? 0 : totalPrice
                }`}</h6>

                <button class="btn btn-warning mt-3 font-weight-bold">
                  <i class="bi bi-cart">Proceed to Checkout</i>
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
