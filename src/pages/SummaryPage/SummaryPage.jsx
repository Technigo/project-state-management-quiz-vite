import "./SummaryPage.css";
import { useQuizStore } from "../../stores/useQuizStore";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";

export const SummaryPage = () => {
  const quizOver = useQuizStore((state) => state.quizOver);
  // Gets the score and saves it in a variable named score
  const score = useQuizStore((state) => state.score);
  // Gets the response object from the store, and saves them in a variable named responses
  const responses = useQuizStore((state) => state.responses);
  // the restart function from the store and saves it in a variable
  const restartQuiz = useQuizStore.getState().restart;
  const handleRestartQuiz = () => {
    restartQuiz();
  };

  // Determine the response text based on the user's score
  const response = responses.find((response) => response.score === score);

  return (
    <div className="summary-wrapper">
      <div className="summary-headings">
        <h1>Quiz Completed!</h1>
        <h2>Your Score: {score} / 10</h2>
      </div>
      {/* Show the response text that comes from the store */}
      <p className="response-text">{response.text}</p>
      {/* Button to restart the quiz */}
      <ButtonLink
        path="/" // or use 'to' for routing, e.g., "/question-page"
        className="restart-btn"
        onClick={handleRestartQuiz}
        ariaLabel="Restart the Quiz"
        label="Do the quiz again!"
      />
    </div>
  );
};
