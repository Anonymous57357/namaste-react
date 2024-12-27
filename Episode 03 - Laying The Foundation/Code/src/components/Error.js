import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();

  console.log(error);
  return (
    <div className="error-container">
      <h2>Oops! The page you're looking for doesn't exist.</h2>
      <h4>
        {error?.status} {error?.statusText}
      </h4>
      <a href="/">Go Back to Home</a>
    </div>
  );
};

export default Error;
  