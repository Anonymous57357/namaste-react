import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Shimmer from "./Shimmer";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const dispatch = useDispatch();
  const resInfo = useRestaurentMenu(resId);

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, avgRating, costForTwo, menu } = resInfo;

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="restaurant-menu-container">
      <h1>{name}</h1>
      <p>Cuisine: {cuisines?.join(", ")}</p>
      <p>Average Rating: {avgRating}</p>
      <p>Cost for Two: ₹{costForTwo}</p>
      <h2>Menu</h2>
      <ul>
        {menu.map((category, index) => (
          <div key={index}>
            <h3 className="font-bold">{category.category}</h3>
            {category.items.map((item) => (
              <li key={item._id} className="flex justify-between items-center">
                <div>
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                </div>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Add to Cart
                </button>
              </li>
            ))}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
