import "./StartPage.css";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";

// Pagecomponent that displays the startpage
export const StartPage = () => {
  return (
    <div className="start-game-wrapper">
      <div className="title">
        <img src="/title-ghost.png" alt="Ghost image" />
      </div>
      <h2>Creep and Crawl, Answer them All</h2>
      {/* Button to start the quiz */}
      <ButtonLink
        path="/question-page"
        className="startquiz-btn"
        label="Start quiz!"
        ariaLabel="Click to start the quiz"
      />
    </div>
  );
};
