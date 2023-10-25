import { Link } from "react-router-dom";
import "./ErrorPage.css";

export const ErrorPage = () => {
  return (
    <div className="error-page-wrapper">
      <h1>Whoops, something went wrong! 👻</h1>
      <Link to="/">
        <button className="errorpage-btn btn-layout">
          <div className="errorpage-btn-content">
            <span className="btn-text">Back to the startpage</span>
          </div>
        </button>
      </Link>
    </div>
  );
};
