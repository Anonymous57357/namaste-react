import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react"; // named export
import Shimmer from "./Shimmer";

const Body = () => {
  // state variables
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [filteredRestaurent, setFilteredRestaurent] = useState([]); // backup data
  const [searchText, setSearchText] = useState("");

  // console.log("Body component re-rendered");

  useEffect(() => {
    fetchData();
    // console.log("useEffect Hook is called")
  }, []);

  const fetchData = async () => {
    const data = await fetch("http://127.0.0.1:8000/api/v1/swiggy/restaurants");

    const json = await data.json();
    console.log(json);

    const jsonData = json?.data ?? [];
    setListOfRestaurents(jsonData);
    setFilteredRestaurent(jsonData);

    if (!jsonData.length) {
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
    const filteredList = listOfRestaurents.filter((res) => res.avgRating >= 4);
    setFilteredRestaurent(filteredList);
  };

  if (listOfRestaurents.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter-btn">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button onClick={handleTopRated}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {filteredRestaurent.map((restaurant) => (
          <RestaurentCard key={restaurant._id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
