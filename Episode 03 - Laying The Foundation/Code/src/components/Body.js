import RestaurentCard, { withPromotedLabel } from "./RestaurentCard";
import { useState, useEffect } from "react"; // named export
import Shimmer from "./Shimmer";
import { SWIGGY_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import userOnlineStatus from "../utils/userOnlineSattus";

const Body = () => {
  // state variables
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [filteredRestaurent, setFilteredRestaurent] = useState([]); // backup data
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurentCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL + "/restaurants");
    const json = await data.json();

    console.log(json.data);

    setListOfRestaurents(json?.data);
    setFilteredRestaurent(json?.data);

    if (!json?.data) {
      console.log("Data is undefined or empty.");
    }
  };

  const handleSearch = () => {
    const filteredList = listOfRestaurents.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurent(filteredList);
  };

  const handleTopRated = () => {
    const filteredList = listOfRestaurents.filter((res) => res.avgRating > 4.3);
    setFilteredRestaurent(filteredList);
  };

  const onlineStatus = userOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Look like your network is gone. please check the your nerwork
        connection!
      </h1>
    );
  }

  if (listOfRestaurents.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex justify-center ">
        <div className="m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-black border-solid "
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="p-4 ml-8 bg-teal-200 mx-2 py- rounded-lg text-center"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4">
          <button
            className="p-4 bg-teal-200 mx-2 py- rounded-lg text-center"
            onClick={handleTopRated}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center">
        {filteredRestaurent.map((restaurant) => (
          <Link to={`restaurants/${restaurant._id}`} key={restaurant._id}>
            {/* we have write a logic for higher order function to enhanced and put label on promoted */}
            {restaurant.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurentCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
