const RestaurentCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, delivery_time } = resData;
  return (
    <div className="m-4 p-4 w-[200px] bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer">
      <img className="rounded-lg" alt="res-logo" src={`${resData.image}`}></img>
      <h2 className="font-bold py-3 text-lg">{name}</h2>
      <h4 className="py-4">{cuisines.join(", ")}</h4>
      <h4 className="font-normal">{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{delivery_time} minutes</h4>
    </div>
  );
};

export default RestaurentCard;
