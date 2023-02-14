import { Link, useRouteError } from "react-router-dom";

const CareersError = () => {
  //This hook will take the error throw and display it here
  const error: any = useRouteError();
  return (
    <div className="careers_error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Back to the homepage</Link>
    </div>
  );
};

export default CareersError;
