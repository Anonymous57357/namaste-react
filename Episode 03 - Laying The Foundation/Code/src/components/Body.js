import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react"; // named export

const Body = () => {
  // state variables super powerfull variable
  const [listOfRestaurents, setListOfRestaurents] = useState(resList);

  return (
    <div className="body">
      <div className="filter-btn">
        <button
          onClick={() => {
            const fileteredList = listOfRestaurents.filter(
              (res) => res.ratings > 4
            );
            setListOfRestaurents(fileteredList);
          }}
        >
          top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurents.map((restaurent) => (
          <RestaurentCard key={restaurent.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
