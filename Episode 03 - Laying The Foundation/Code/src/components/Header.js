import { useState } from "react";
import { APP_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import userOnlineStatus from "../utils/userOnlineSattus";
import { useSelector } from "react-redux";

const Head = () => {
  const [user, setUser] = useState(null); // State to manage user information
  const cartItems = useSelector((store) => store.cart.items);

  const userStatus = userOnlineStatus();

  const handleLogin = () => {
    if (!user) {
      // Simulate user login
      setUser({ name: "Mukesh" }); // Replace with actual login logic
    } else {
      // Logout logic
      setUser(null);
    }
  };

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="">
        <img className="w-40" src={APP_LOGO} alt="App Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex m-4 font-sans text-lg">
          <li className="px-4">{userStatus ? "Online:✅" : "Offline:🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            {user ? (
              <>
                <span>Welcome, {user.name}</span>{" "}
                <button className="ml-2 px-4" onClick={handleLogin}>
                  Logout
                </button>
              </>
            ) : (
              <button className="px-4" onClick={handleLogin}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Head;
