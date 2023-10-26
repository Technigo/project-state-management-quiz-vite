import useQuizStore from "../../stores/useQuizStore";
import "./SubmitAnswer.css";
import { useState } from "react";

export const SubmitAnswer = ({ questionId, selectedOption }) => {
  const questions = useQuizStore((state) => state.questions);
  const submitAnswer = useQuizStore((state) => state.submitAnswer);
  const goToNextQuestion = useQuizStore((state) => state.goToNextQuestion);

  const [wasLastAnswerCorrect, setWasLastAnswerCorrect] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const selectedOptionObj = questions.find((q) => q.id === questionId).options[
    selectedOption
  ];

  const handleSubmission = (event) => {
    event.preventDefault(); // Prevent the form from submitting first

    /*if (selectedOption === undefined) {
      // Show an alert message to the user if no option has been chosen

      return; // Exit the function early
    }*/

    // Safeguard against undefined selectedOptionObj
    if (!selectedOptionObj) {
      alert("Please select an option before submitting.");
      return; // Exit the function early
    }

    console.log("Submitting answer...");

    if (selectedOptionObj.isCorrect) {
      console.log("Correct answer selected!");
      setWasLastAnswerCorrect(true);
    } else {
      console.log("Incorrect answer selected!");
      setWasLastAnswerCorrect(false);
    }

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
