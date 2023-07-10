export const addToCart =
  (shawarma, quantity, varient) => (dispatch, getState) => {
    var cartItem = {
      name: shawarma.name,
      _id: shawarma._id,
      image: shawarma.image,
      varient: varient,
      quantity: Number(quantity),
      prices: shawarma.prices,
      price: shawarma.prices[0][varient] * quantity,
    };

    if (cartItem.quantity > 10) {
      alert("Oops!!! You cannot add more than 10 quantities!!!");
    } else {
      if (cartItem.quantity < 1) {
        dispatch({ type: "DELETE_FROM_CART", payload: shawarma });
      } else {
        dispatch({ type: "ADD_TO_CART", payload: cartItem });
      }
    }

    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

export const deleteFromCart = (shawarma) => (dispatch, getState) => {
  const cartItems = getState().cartReducer.cartItems;

  localStorage.removeItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: "DELETE_FROM_CART", payload: shawarma });
};
