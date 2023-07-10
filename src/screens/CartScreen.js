import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { deleteFromCart } from "../actions/cartActions";
import Checkout from "../components/Checkout";

export default function CartScreen() {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems
  var subtotal = cartItems.reduce((x,item)=>x+item.price,0)
  const dispatch=useDispatch()
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 style={{ fontSize: "25px" }}>My Cart</h2>
          {cartItems.map((item) => {
            return (
              <div className="flex-container text-left">
                <div className="text-left w-100">
                  <h5>
                    {item.name}[{item.varient}]
                  </h5>
                  <h6>
                    Price: {item.quantity}*{item.prices[0][item.varient]}=
                    {item.price}
                  </h6>
                  <h6 style={{ display: "inline" }}>Quantity: </h6>
                  <i
                    className="fa fa-plus"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity + 1, item.varient)
                      );
                    }}
                  ></i>
                  <b>{item.quantity}</b>
                  <i
                    className="fa fa-minus"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity - 1, item.varient)
                      );
                    }}
                  ></i>
                  <hr />
                </div>
                <div className="w-100 m-1">
                  <img
                    src={item.image}
                    style={{ height: "80px", width: "80px" }}
                  />
                </div>
                <div className="w-100 m-1">
                  <i
                    className="fa fa-trash mt-4"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(deleteFromCart(item));
                    }}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>

        <div className="col-md-4 text-right">
          <h2 style={{ fontSize: "25px" }}>Sub Total : {subtotal} /-</h2>
          <Checkout subtotal={ subtotal} />
        </div>
      </div>
    </div>
  );
}
