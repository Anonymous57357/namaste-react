import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurantMenu = () => {
  const { resId } = useParams(); // Get restaurant ID from the URL

  console.log("Restaurant menu component rendered");

  // custom hook
  const resInfo = useRestaurentMenu(resId);

  if (resInfo === null) {
    return <Shimmer />; // Show shi mmer until data is loaded
  }

  const { name, cuisines, avgRating, costForTwo, menu } = resInfo;

  return (
    <div className="restaurant-menu-container">
      <h1>{name}</h1>
      <p>Cuisine: {cuisines?.join(", ") || "N/A"}</p>
      <p>Average Rating: {avgRating || "Not rated yet"}</p>
      <p>Cost for Two: ₹{costForTwo}</p>
      <h2>Menu</h2>
      <ul>
        {menu?.map((item) => (
          <li key={item._id}>
            {item.name} ₹{item.price}
          </li>
        )) || <p>No menu available</p>}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
