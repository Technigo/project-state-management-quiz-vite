import { useQuizStore } from "../../stores/useQuizStore";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./nextQuestion.css";
import { BiSolidChevronRight } from "react-icons/bi";

export const NextQuestion = () => {
  const [errorMessage, setErrorMessage] = useState(null); // State variable for error message
  const quizOver = useQuizStore((state) => state.quizOver); // Gets the quizOver state from the store and saves it in a variable
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  ); // Gets the currentQuestionIndex from the store and saves it in a variable
  const selectedAnswerIndex = useQuizStore(
    (state) => state.answers[state.currentQuestionIndex]?.answerIndex // Gets the selected answers index from the store and saves it in a variable
  );

  const handleNextQuestionClick = () => {
    if (selectedAnswerIndex !== undefined) {
      useQuizStore.getState().goToNextQuestion();
      // Clear any previous error messages
      setErrorMessage(null);
    } else {
      // User has not selected an option, set the error message
      setErrorMessage("Oopsie 👻, you need to choose an option!");
    }
  };

  // Check if the current question is the last one
  const isLastQuestion = currentQuestionIndex === 9;
  // If the user is on the last question and the quizOver is set to true, save the result in a variable
  const showGetScoreButton = isLastQuestion && quizOver === true;

  return (
    <div className="next-summary-btn">
      {/* if the user is on the last question, and quizOver is set tu true, then Show the "Get your score" button. */}
      {showGetScoreButton ? (
        <Link to="/summary-page">
          <div className="summary-btn btn-layout">
            <span className="btn-text">Get your score</span>
          </div>
        </Link>
      ) : (
        <div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button
            className="next-btn btn-layout"
            onClick={handleNextQuestionClick}
          >
            <div id="btn-pseudocontent"></div>
            <div className="next-btn-content">
              {/* IF currentIndex is 9 (the last question), then change the text to Finish */}
              {currentQuestionIndex === 9 ? (
                <span className="btn-text">Finish</span>
              ) : (
                <span className="btn-text">Next</span>
              )}
              <BiSolidChevronRight className="next-icon" />
            </div>
          </button>
        </div>
      )}
    </div>
  );
};
