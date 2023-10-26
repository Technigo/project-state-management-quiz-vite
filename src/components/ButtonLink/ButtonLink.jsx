import { Link } from "react-router-dom";
import "./ButtonLink.css";

// Component for the button-element, utilizes the Link-component from react-router-dom
export const ButtonLink = ({ path, onClick, label, className, ariaLabel }) => {
  return (
    <Link to={path}>
      <button
        // sets standard classnames and adds any classnames passed as props
        className={`btn-layout btn-gradient ${className}`}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        <span className="btn-text">{label}</span>
      </button>
    </Link>
  );
};
