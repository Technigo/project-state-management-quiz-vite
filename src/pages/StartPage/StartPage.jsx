import { ButtonLink } from "../../components/ButtonLink/ButtonLink";
import "./StartPage.css";

// Pagecomponent that displays the startpage
export const StartPage = () => {
  return (
    <div className="start-game-wrapper">
      <div className="title">
        <img src="/title-ghost.png" alt="Ghost image" />
      </div>
      <h2 className="slogan">Creep and Crawl, Answer them All</h2>
      {/* Button to start the quiz */}
      <ButtonLink
        path="/question-page"
        label="Start quiz!"
        ariaLabel="Click to start the quiz"
      />
    </div>
  );
};
