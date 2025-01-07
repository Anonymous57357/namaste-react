import { useState, useEffect } from "react";
import { APP_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import userOnlineStatus from "../utils/userOnlineSattus";
import { useSelector } from "react-redux";
const Head = () => {
  const [button, setButton] = useState("login");
  ("Normal JavaScript variables do not persist state across renders. React's useState hook is used to maintain state, syncing the data and UI layers.");

  // button -> using the state
  // setButton -> updatagin the state (sync the data layer + ui layer)
  // rerendered the Head componendt once again (once setButton **triggerd) (calling not mutating or changing)
  // differ algorithm - finds the difference between old state (virtual dom tree) vs new state - updated state (new dom tree)

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const userStatus = userOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="">
        <img className="w-40" src={APP_LOGO}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex m-4 font-sans text-lg">
          <li className="px-4">{userStatus ? "Online:✅" : "Offline:🔴"}</li>
          <li className="px-4">
            <Link to="/"> home</Link>
          </li>{" "}
          <li className="px-4">
            <Link to="/about"> About us</Link>
          </li>{" "}
          <li className="px-4">
            <Link to="/contact"> Contact us</Link>
          </li>{" "}
          <li className="px-4">
            <Link to="/cart"> cart {cartItems.length} items</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery"> grocery</Link>
          </li>
          <button
            className="px-4"
            onClick={() => {
              // let btnName = "logout";
              button === "login" ? setButton("logout") : setButton("login");
              console.log(`button changed`);
            }}
          >
            {button}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Head;
