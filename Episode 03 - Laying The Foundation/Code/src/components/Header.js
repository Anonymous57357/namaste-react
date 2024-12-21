import { useState, useEffect } from "react";
import { APP_LOGO } from "../utils/constants";
const Head = () => {
  const [button, setButton] = useState("login");
  ("Normal JavaScript variables do not persist state across renders. React's useState hook is used to maintain state, syncing the data and UI layers.");

  // button -> using the state
  // setButton -> updatagin the state (sync the data layer + ui layer)
  // rerendered the Head componendt once again (once setButton **triggerd) (calling not mutating or changing)
  // differ algorithm - finds the difference between old state (virtual dom tree) vs new state - updated state (new dom tree)

  useEffect(() => {
    console.log("useEffect hook called");
  }, [button]);

  console.log("Header component rendered");

  return (
    <div className="header">
      <div className="logo">
        <img src={APP_LOGO}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>cart</li>
          <button
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
