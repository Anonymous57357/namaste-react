import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleClearCart = () => {
    dispatch(clearItem());
  };

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <Link to="/">
          <p>Your cart is empty. Please go shopping</p>
        </Link>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item._id} className="flex justify-between items-center">
                <div>
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div className="">
                  <button className="bg-green-500 text-white px-3 py-1 rounded ">
                    +
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded mx-2">
                    -
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h2>Total: ₹{totalAmount}</h2>
          <button
            onClick={handleClearCart}
            className="bg-purple-600 text-white px-4 py-2 rounded"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
