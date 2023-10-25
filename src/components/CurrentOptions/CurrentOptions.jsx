import { useQuizStore } from "../../stores/useQuizStore";
import "./CurrentOptions.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { GoCheckCircleFill } from "react-icons/go";

export const CurrentOptions = ({ question, currentQuestionIndex }) => {
  // Get the available options.
  const options = question.options;

  // Destructure values from useQuizStore.
  const { answers, submitAnswer } = useQuizStore();

  // Retrieve the selected answer for the current question.
  const selectedAnswer = answers[currentQuestionIndex];

  // Determine the index of the selected answer, if any.
  const selectedAnswerIndex = selectedAnswer?.answerIndex;

  // Determine if the selected answer is correct.
  // 'isCorrect' is a boolean indicating whether the selected answer is correct.
  const isAnswerCorrect = selectedAnswer?.isCorrect;

  // Handle the click event when an option is selected.
  const handleOptionClick = (index) => {
    // Check if option is already choosen.
    if (selectedAnswerIndex !== undefined) {
      // Do nothing if the user attempts to change their answer.
      return;
    }

    // Submit the selected answer to the store.
    // useQuizStore.getState().submitAnswer(question.id, index);
    submitAnswer(question.id, index);

    // Set focus to the next interactive element after an option is selected.
    const nextElement = document.querySelector(".next-button");
    if (nextElement) {
      nextElement.focus();
    }
  };

  // Handle keydown events, allowing users to press Enter to select an option.
  const handleOptionKeyDown = (event, index) => {
    if (event.key === "Enter") {
      handleOptionClick(index);
    }
  };

  return (
    // Container for the answer options.
    <div className="options-container">
      {options.map((option, index) => (
        <button
          key={index}
          type="button"
          onClick={() => handleOptionClick(index)} // Handle a click event when an option is selected.
          onKeyDown={(event) => handleOptionKeyDown(event, index)} // Handle keydown events to allow users to press Enter to select an option.
          disabled={selectedAnswerIndex !== undefined} // Disable the button if an answer is already selected.
          aria-label={`Select option: ${option}`} // Provide an accessible label for screen readers.
          // Apply a CSS class based on whether the option that is selected is correct or incorrect.
          className={
            selectedAnswerIndex === index
              ? isAnswerCorrect
                ? "correct"
                : "incorrect"
              : ""
          }
        >
          {option}
          {/* Use conditional rendering to display icons based on the answer correctness */}
          {isAnswerCorrect && selectedAnswerIndex === index && (
            <GoCheckCircleFill className="correct-icon" />
          )}
          {!isAnswerCorrect && selectedAnswerIndex === index && (
            <AiFillCloseCircle className="incorrect-icon" />
          )}
        </button>
      ))}
    </div>
  );
};
