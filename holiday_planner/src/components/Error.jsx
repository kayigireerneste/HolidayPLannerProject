import "../css/error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="erroFounder">
      <h1 className="error">404</h1>
      <p>page not found</p>
      <Link className="btn" to="/">GO BACK HOME</Link>
    </div>
  );
};

export default Error;
