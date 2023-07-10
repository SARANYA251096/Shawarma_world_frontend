import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/orderActions'
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";

export default function Checkout({ subtotal }) {
  const orderState = useSelector((state) => state.placeOrderReducer)
  const {loading,error,success}=orderState
    const dispatch=useDispatch()
    function tokenHandler(token) {
      console.log(token)
      dispatch(placeOrder(token,subtotal))
}

  return (
    <div>
      {loading && <Loading />}
      {success && <Success success="Your Order Placed Successfully" />}
      {error && <Error error="Something went wrong" />}

      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHandler}
        currency="INR"
        stripeKey="pk_test_51NRCkXSGagqjzoc13MiilKUW8k87tNeEBCUI8i7kiSXnGK50W7KLAzsDbzHDmIbvkG1364qGkixH2gwDMLeRisoF00W2JyLZHg"
      >
        <button className="btn">Pay now</button>
      </StripeCheckout>
    </div>
  );
}
