import "./SummaryPage.css";
import { useQuizStore } from "../../stores/useQuizStore";
import { Link } from "react-router-dom";

export const SummaryPage = () => {
  const quizOver = useQuizStore((state) => state.quizOver);
  const score = useQuizStore((state) => state.score);

  const responses = useQuizStore((state) => state.responses);

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
      <p className="response-text">{response.text}</p>
      <Link to="/">
        <button className="restart-btn btn-layout" onClick={handleRestartQuiz}>
          <div className="restart-btn-content">
            <span className="btn-text">Do the quiz again!</span>
          </div>
        </button>
      </Link>
    </div>
  );
};
