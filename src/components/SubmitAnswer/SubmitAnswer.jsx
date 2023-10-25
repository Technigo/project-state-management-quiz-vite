import useQuizStore from "../../stores/useQuizStore";
import "./SubmitAnswer.css";
import { useState } from "react";

export const SubmitAnswer = ({ questionId, selectedOption }) => {
  const submitAnswer = useQuizStore((state) => state.submitAnswer);
  const goToNextQuestion = useQuizStore((state) => state.goToNextQuestion);
  const correctAnswerIndex = useQuizStore((state) => state.correctAnswerIndex);

  const [showMessage, setShowMessage] = useState(false);

  const handleSubmission = (event) => {
    event.preventDefault();

    if (selectedOption === undefined) {
      console.log("Selected option is undefined");
      // Handle the case where no option is selected
      // You can show an error message or handle it as needed
      return;
    }
    console.log("Submitting answer...");
    submitAnswer(questionId, selectedOption);
    goToNextQuestion();
    setShowMessage(true);
  };

  return (
    <div>
      <button className="submit-button" onClick={handleSubmission}>
        Submit
      </button>
      {showMessage && (
        <p>
          {selectedOption === correctAnswerIndex
            ? "Woho! You've got the correct answer!"
            : "Oh no, that's unfortunately wrong!"}
        </p>
      )}
    </div>
  );
};

// export const SubmitAnswer = ({ questionId, selectedOption }) => {
//   const correctAnswerIndex = useQuizStore((state) => state.correctAnswerIndex);
//   const submitAnswer = useQuizStore((state) => state.submitAnswer);
//   const goToNextQuestion = useQuizStore((state) => state.goToNextQuestion);

//   const isCorrect = selectedOption === correctAnswerIndex;
//   const showMessage = isCorrect
//     ? "Woho! You've got the correct answer!"
//     : "Oh no, that's unfortunately wrong!";

//   const handleSubmission = (event) => {
//     event.preventDefault();
//     submitAnswer(questionId, selectedOption);
//     goToNextQuestion();
//   };

//   return (
//     <div>
//       <button className="submit-button" onClick={handleSubmission}>
//         Submit
//       </button>
//       {showMessage && <p>{showMessage}</p>}
//     </div>
//   );
// };

// export const SubmitAnswer = ({ questionId, selectedOption }) => {
//   const submitAnswer = useQuizStore((state) => state.submitAnswer);
//   const goToNextQuestion = useQuizStore((state) => state.goToNextQuestion);

//   const handleSubmission = (event) => {
//     event.preventDefault(); // This will prevent the default form submission behavior
//     submitAnswer(questionId, selectedOption);
//     goToNextQuestion();
//   };

//   let showMessage = false;

//   if (showMessage) {
//     if (submitAnswer === useQuizStore.correctAnswerIndex) {
//       showMessage = "Woho! You've got the correct answer!";
//     } else {
//       showMessage = "Oh no, that's unfortunately wrong!";
//     }
//   }

//   return (
//     <div>
//       <button className="submit-button" onClick={handleSubmission}>
//         Submit
//       </button>
//       {showMessage && (
//         <p>
//           {submitAnswer === useQuizStore.correctAnswerIndex
//             ? "Woho! You've got the correct answer!"
//             : "Oh no, that's unfortunately wrong!"}
//         </p>
//       )}
//     </div>
//   );
// };
