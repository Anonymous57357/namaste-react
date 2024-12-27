import React from "react";
class UserClass extends React.Component {
  // whenever the class is created a instance is also created inside
  // the instance we can receive props amd  we can create state variables
  constructor(props) {
    super(props);

    this.state = {};
    // console.log(this.props.name, "child constructor");
  }

  componentDidMount() {
    // console.log(this.props.name, "child componet did mount is called");
  }

  render() {
    const { login, followers, avatar_url } = this.props;
    return (
      <div className="user-card">
        <h2>Name: {login} </h2>
        <h3>followers: {followers} </h3>
        <img src={avatar_url} alt="avatar_url"></img>
      </div>
    );
  }
}

/**
 * ----- MOUNTING PHASE ------
 * 
 * Constructor (dummy data) state (dummy dat)
 * Render (dummy data)                     ------ render phase ----
 *        <HTML Dummy>
 * 
 * componentDidMount  
 *         (api call)                      ------ commit phase
 *           <this.setState .--> state variable updated
 * 
 * ----- UPDATE PHASE --------
 *   
 *         render (Api data)
 *          <HTML Api data>
 * 
 * 
 */

export default UserClass;
