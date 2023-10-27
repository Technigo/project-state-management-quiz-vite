import useQuizStore from "../../stores/useQuizStore";
import "./QuestionCounter.css";

// This is a React component named QuestionCounter that displays the current question number, the progress bar, and navigation buttons for our quiz.
export const QuestionCounter = ({ totalQuestions }) => {
  // Get the current question index from the store.
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );

  // Handle going to the next question.
  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      useQuizStore.getState().goToNextQuestion();
    }
  };

  // Handle going back to the previous question.
  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      useQuizStore.setState({ currentQuestionIndex: currentQuestionIndex - 1 });
    }
  };
  // Calculate the progress as a percentage
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  console.log(progress);

  return (
    <div className="question-counter">
      {totalQuestions > 0 && (
        <div>
          {currentQuestionIndex + 1} / {totalQuestions}
        </div>
      )}

      {/* Progress bar */}
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }} />
      </div>
      <div className="two-buttons">
        <button
          className="previous-button"
          onClick={handleBack}
          disabled={currentQuestionIndex === 0}>
          Previous
        </button>
        <button
          className="next-button"
          onClick={handleNext}
          disabled={currentQuestionIndex === totalQuestions - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

// --------------explanation for line 8-17-------------
// Using useQuizStore.getState().goToNextQuestion() encapsulates the logic for moving to the next question inside the store. The store itself determines how to update the state based on the current state. This can be helpful for keeping the logic centralized and abstracted from the components.

// Using useQuizStore.setState({ currentQuestionIndex: currentQuestionIndex + 1 }) gives you more direct control over state updates. You specify exactly how the state should change. It can be useful if you want to handle state updates directly in the component.

// The choice between these approaches depends on your project's architecture and design preferences. If the logic for advancing to the next question is relatively simple and can be encapsulated in the store, using the goToNextQuestion function may provide a cleaner and more maintainable solution. However, if you need more fine-grained control or flexibility in state updates, using setState directly in the component might be more appropriate.

//here we used useState-hook!!

// import "./QuestionCounter.css";
// import { useState } from "react";

// export const QuestionCounter = ({ totalQuestions }) => {
//   const [counter, setCounter] = useState(1);

//   const handleNext = () => {
//     if (counter < totalQuestions) {
//       setCounter(counter + 1);
//     }
//   };
//   const handleBack = () => {
//     if (counter > 1) {
//       setCounter(counter - 1);
//     }
//   };

//   return (
//     <div className="question-counter">
//       {totalQuestions > 0 && (
//         <div>
//           Question {counter} / {totalQuestions}
//         </div>
//       )}
//       <button onClick={handleBack} disabled={counter === 1}>
//         Previous
//       </button>
//       <button onClick={handleNext} disabled={counter === totalQuestions}>
//         Next
//       </button>
//     </div>
//   );
// };
