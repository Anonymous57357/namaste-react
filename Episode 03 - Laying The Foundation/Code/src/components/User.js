import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(2);
  console.log(props);

  const { Name, Location, Contact } = props;
  return (
    <div className="user-card">
      <h1> Count: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increment
      </button>
      <h1> Coun2: {count2}</h1>
      <h2>Name: {Name}</h2>
      <h3>Location: {Location}</h3>
      <h4>Contact: {Contact}</h4>
    </div>
  );
};

export default User;
