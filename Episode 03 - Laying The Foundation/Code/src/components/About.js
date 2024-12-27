import { useEffect } from "react";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class AboutClass extends Component {
  constructor(props) {
    // constructor reveive
    super(props); // super with props

    this.state = {
      userInfo: "dummy",
      location: "default",
      avatar_url: "dummy_url.png",
    };

    console.log("Parent constructor");
  }

  async componentDidMount() {
    console.log("parent componet did mount is called");
    const getUserInfo = await fetch(
      "https://api.github.com/users/Anonymous57357"
    );
    const json = await getUserInfo.json();

    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("parent componet did update is called");
  }

  componentWillUnmount() {
    console.log("parent componet wil unmount is called");
  }
  render() {
    console.log("parent render"); 
    const { followers, login, avatar_url } = this.state.userInfo;
    return (
      <div>
        <h2>About</h2>
        <h4>Welcome to the about page!</h4>
        {/* <User Name={"mukesh"} Location={"Vellore"} Contact={"mukesh@20"} /> */}
        <UserClass
          login={login}
          followers={followers}
          avatar_url={avatar_url}
        />
      </div>
    );
  }
}

// Parent constructor
// parent render

//    - first child  constructor
//    - frist child Render
//    - second child  constructor
//    - second child Render
//    - third child  constructor
//    - third child Render
// - first child componet did mount is called
// - second child componet did mount is called
// - third child componet did mount is called
// - parent componet did mount is called

export default AboutClass;
