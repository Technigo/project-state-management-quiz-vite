import "./ButtonLink.css";
import { Link } from "react-router-dom";

export const ButtonLink = ({ path, onClick, label, className, ariaLabel }) => {
  return (
    <Link to={path}>
      <button
        className={`btn-layout btn-gradient ${className}`}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        <span className="btn-text">{label}</span>
      </button>
    </Link>
  );
};
