import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={CDN_URL}></img>
      <h3>{resData.restaurant_name}</h3>
      <h4>{resData.cuisine}</h4>
      <h4>{resData.ratings}</h4>
      <h4>{resData.delivery_time}</h4>
    </div>
  );
};

export default RestaurentCard;
