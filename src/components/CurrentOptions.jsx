//This component is mounted in the page 'Questions.jsx'

import useQuizStore from "../stores/useQuizStore";
import "./CurrentOptions.css";

export const CurrentOptions = () => {
  // Retrieve the questions and current question index from the store
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore((state) => state.currentQuestionIndex);

  //TIMER!!
  // const isTimeOver = useQuizStore((state) => state.isTimeOver)

  // Get the current question and its available options
  const question = questions[currentQuestionIndex];
  const options = question.options;
  const correctAnswerIndex = question.correctAnswerIndex;

  // Retrieve the selected answer index, whether it's correct, and the action to submit answers from the store
  const selectedAnswerIndex = useQuizStore((state) => state.answers[currentQuestionIndex]?.answerIndex);
  
  const isAnswerCorrect = useQuizStore((state) => state.answers[currentQuestionIndex]?.isCorrect);

  // Handle the click event when an option is selected
  const handleOptionClick = (index) => {
    // Check if an answer is already submitted for the current question
    // || isTimeOver this could be included in the if statement below to disable options when time is up.
    if (selectedAnswerIndex !== undefined  ) {
      // Provide nothing to the user if they attempt to answer a question again
     return;
    } 
    // Submit the selected answer to the store
    useQuizStore.getState().submitAnswer(question.id, index);
  };

  return (
    <div className="options-container">
      {options.map((option, index) => (
        <button
          key={index}
          type="button"
          onClick={() => handleOptionClick(index)}
          className={
            // Check if the current button corresponds to the answer the user has selected
            selectedAnswerIndex === index
              ? isAnswerCorrect
                ? "correct" // If the selected answer is correct, apply the "correct" class
                : "incorrect" // If the selected answer is incorrect, apply the "incorrect" class
              : 
              // Check if the current button corresponds to the correct answer and the user has made a selection
              index === correctAnswerIndex && selectedAnswerIndex !== undefined
                ? "correct" // Turn the correct answer green when user clicks the wrong answer
                : "" // If none of the above conditions are met, no class is applied
          } 
        >
          {option}
        </button>
      ))}
    </div>
  );
};











