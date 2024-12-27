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
      <div className="flex flex-col justify-center items-center p-6 border-2 border-gray-200 rounded-lg shadow-lg bg-gray-50 w-80 mx-auto">
        <img
          className="w-24 h-24 rounded-full mb-4 border-4 border-gray-300"
          src={avatar_url}
          alt="avatar_url"
        />
        <h2 className="text-lg font-semibold text-gray-800">Name: {login}</h2>
        <h3 className="text-sm text-gray-600">Followers: {followers}</h3>
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
