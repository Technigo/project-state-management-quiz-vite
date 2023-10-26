import { useQuizStore } from "../../stores/useQuizStore";
import { useState } from "react";
import { BiSolidChevronRight } from "react-icons/bi";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import "./nextQuestion.css";

export const NextQuestion = () => {
  const [errorMessage, setErrorMessage] = useState(null); // State variable for error message
  // const [disableNextButton, setDisableNextButton] = useState(true);
  const quizOver = useQuizStore((state) => state.quizOver); // Gets the quizOver state from the store and saves it in a variable
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  ); // Gets the currentQuestionIndex from the store and saves it in a variable
  const selectedAnswerIndex = useQuizStore(
    (state) => state.answers[state.currentQuestionIndex]?.answerIndex // Gets the selected answers index from the store and saves it in a variable
  );

  // Function to handle the "Next" button click.
  const handleNextQuestionClick = () => {
    if (selectedAnswerIndex !== undefined) {
      // If an answer is selected, go to the next question and clear any previous error messages.
      useQuizStore.getState().goToNextQuestion();
      setErrorMessage(null);
    } else {
      // If no answer is selected, set an error message and clear it after 1,5 seconds
      setErrorMessage("Oopsie 👻, choose an option!");
      setTimeout(() => {
        setErrorMessage(null);
      }, 1500); // 1500 milliseconds = 2 seconds
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
        // Button for getting the final score
        <ButtonLink
          path="/summary-page"
          className="summary-btn"
          label="Get your score"
          ariaLabel="Click to view your score"
        />
      ) : (
        <div>
          {/* Display error message if an option is not selected */}
          {errorMessage && (
            // This <p> element displays error messages and is configured for screen readers using ARIA attributes. The error message content is dynamically generated and inserted using the "errorMessage" variable.
            <p className="error-message" role="alert" aria-live="assertive">
              {errorMessage}
            </p>
          )}
          {/* "Next" button for moving to the next question or finishing the quiz */}
          <button
            className="next-btn btn-layout"
            onClick={handleNextQuestionClick}
            aria-label={currentQuestionIndex === 9 ? "Finish" : "Next"}
            // disabled={disableNextButton} // Disable the "Next" button when no option is selected
          >
            <div id="btn-pseudocontent"></div>
            <div className="next-btn-content">
              {/* If currentIndex is 9 (the last question), then change the text to Finish */}
              {currentQuestionIndex === 9 ? (
                <span className="btn-text">Finish</span>
              ) : (
                <span className="btn-text">Next</span>
              )}
              {/* Conditionally render the "BiSolidChevronRight" icon if not on the last question */}
              {currentQuestionIndex !== 9 && (
                <BiSolidChevronRight className="next-icon" />
              )}
            </div>
          </button>
        </div>
      )}
    </div>
  );
};
