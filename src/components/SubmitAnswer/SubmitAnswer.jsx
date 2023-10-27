import useQuizStore from "../../stores/useQuizStore";
import "./SubmitAnswer.css";
import { useState } from "react";

// Define the SubmitAnswer component, which allows users to submit their selected answer option.
export const SubmitAnswer = ({ questionId, selectedOption }) => {
  const questions = useQuizStore((state) => state.questions);
  const submitAnswer = useQuizStore((state) => state.submitAnswer);
  const goToNextQuestion = useQuizStore((state) => state.goToNextQuestion);
  // State to track if the last submitted answer was correct.
  const [wasLastAnswerCorrect, setWasLastAnswerCorrect] = useState(false);
  // State to decide if a message should be shown after an answer is submitted.
  const [showMessage, setShowMessage] = useState(false);
  // Find the detailed object of the selected option from the questions list.
  const selectedOptionObj = questions.find((q) => q.id === questionId).options[
    selectedOption
  ];
  // Handler function to execute upon clicking the Submit button.
  const handleSubmission = (event) => {
    event.preventDefault(); // Prevent the form from submitting first

    // If selected option is not defined, alert the user to select an option.
    if (!selectedOptionObj) {
      alert("Please select an option before submitting.");
      return; // Exit the function early
    }
    // log used when debugging!
    /* console.log("Submitting answer...");*/

    // Check if the selected option is correct and update the state accordingly.
    if (selectedOptionObj.isCorrect) {
      console.log("Correct answer selected!");
      setWasLastAnswerCorrect(true);
    } else {
      console.log("Incorrect answer selected!");
      setWasLastAnswerCorrect(false);
    }
    // Update the quiz store with the submitted answer and navigate to the next question.
    submitAnswer(questionId, selectedOption);
    goToNextQuestion();
    setShowMessage(true);
  };

  return (
    <div>
      <button
        className="submit-button"
        onClick={handleSubmission}
        type="submit">
        Submit
      </button>
      {showMessage && (
        <p className="message">
          {wasLastAnswerCorrect
            ? "Woho! You've got the correct answer!"
            : "Oh no, that's unfortunately wrong!"}
        </p>
      )}
    </div>
  );
};
