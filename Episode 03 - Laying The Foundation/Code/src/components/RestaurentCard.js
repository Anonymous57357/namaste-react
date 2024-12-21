const RestaurentCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={resData.image}></img>
      <h2>{resData.name}</h2>
      <h4>{resData.cuisines}</h4>
      <h4>{resData.avgRating} stars</h4>
      <h4>$ {resData.costForTwo} FOR TWO</h4>
      <h4>{resData.delivery_time} minutes</h4>
    </div>
  );
};

export default RestaurentCard;
