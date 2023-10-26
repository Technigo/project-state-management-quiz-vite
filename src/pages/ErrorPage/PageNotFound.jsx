import { ButtonLink } from "../../components/ButtonLink/ButtonLink";
import "./ErrorPage.css";

// Pagecomponent that displays an error message if the route isn't one specified in the routes component
export const ErrorPage = () => {
  return (
    <div className="error-page-wrapper">
      <h1>Whoops, something went wrong! 💀</h1>
      <ButtonLink
        path="/"
        className="errorpage-btn"
        ariaLabel="Back to the startpage"
        label="Go back to the startpage"
      />
    </div>
  );
};