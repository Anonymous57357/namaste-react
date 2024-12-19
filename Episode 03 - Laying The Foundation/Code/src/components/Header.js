import { APP_LOGO } from "../utils/constants";
const Head = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Head;
